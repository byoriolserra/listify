let accessToken;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectURI = 'https://listifyproject.netlify.app';

const Spotify = {

    async getAccessToken() {
        if (accessToken) {
            return accessToken;
        };

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (!accessTokenMatch) {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=playlist-modify-public`;
        };

        accessToken = accessTokenMatch[1];
        const expirationTime = (Number(expirationTimeMatch[1]) * 1000);
        window.setTimeout(() => accessToken='', expirationTime);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
    },

    async search(term) {
        const accessToken = await Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return [];
            }

            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    async savePlaylist(name, trackUris) {
        if(!name || !trackUris.length) {
            return;
        }

        const accessToken = await Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken} ` };
        let userId;

        return fetch(`https://api.spotify.com/v1/me`, { headers: headers }).then(response => response.json()).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name })
            }).then(response => response.json()).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ uris: trackUris })
                })
            })
        });
    }
};

export default Spotify;

