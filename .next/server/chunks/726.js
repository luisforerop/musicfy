exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 6823:
/***/ ((module) => {

// Exports
module.exports = {
	"albumsContainer": "Artist_albumsContainer__en7OS",
	"albumContainer": "Artist_albumContainer__ai_AY"
};


/***/ }),

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dp": () => (/* reexport */ Album),
  "On": () => (/* reexport */ ArtistLayout),
  "SK": () => (/* reexport */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/index.ts + 36 modules
var components = __webpack_require__(1925);
// EXTERNAL MODULE: ./src/shared/context/index.ts + 2 modules
var context = __webpack_require__(3485);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/layouts/Artist/Artist.module.css
var Artist_module = __webpack_require__(6823);
var Artist_module_default = /*#__PURE__*/__webpack_require__.n(Artist_module);
;// CONCATENATED MODULE: ./src/layouts/Artist/index.tsx





const { albumsContainer , albumContainer ,  } = (Artist_module_default());
const ArtistLayout = ()=>{
    const { query  } = (0,router_.useRouter)();
    const artistQuery = query.artist;
    let artist = artistQuery === null || artistQuery === void 0 ? void 0 : artistQuery.replace(/-/g, " ");
    artist = artist === "AC DC" ? "AC/DC" : artist;
    const { artists , albums  } = (0,context/* useMusicfyContext */.RT)();
    const artistData = artists === null || artists === void 0 ? void 0 : artists.find(({ name  })=>name === artist
    );
    const artistAlbums = albums ? albums[artist] : [];
    if (!artistData) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            padding: "0 200px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components/* ArtistInfo */.Ig, {
                ...artistData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: albumsContainer,
                children: artistAlbums === null || artistAlbums === void 0 ? void 0 : artistAlbums.map((album)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: albumContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* AlbumCard */.rf, {
                            ...album
                        })
                    }, album.id)
                )
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/shared/hooks/index.ts + 2 modules
var hooks = __webpack_require__(9567);
;// CONCATENATED MODULE: ./src/layouts/Album/index.tsx





const Album = ()=>{
    const { query  } = (0,router_.useRouter)();
    let { artist , album  } = query;
    const sanitizedArtist = artist === "AC-DC" ? "AC/DC" : artist === null || artist === void 0 ? void 0 : artist.replace(/-/g, " ");
    const sanitizedAlbum = album === null || album === void 0 ? void 0 : album.replace(/_/g, " ").replace(/qst/g, "?");
    const { albums  } = (0,context/* useMusicfyContext */.RT)();
    const albumData = albums ? albums[sanitizedArtist] : null;
    const albumInfo = albumData === null || albumData === void 0 ? void 0 : albumData.find(({ name  })=>name === sanitizedAlbum
    );
    const { artist: albumArtist , image , name: name1 , id: albumId ,  } = albumInfo || {};
    const songs = (0,hooks/* useGetSongs */.ir)({
        by: "ALBUM",
        artist: sanitizedArtist,
        albumId
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "30% 70%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components/* AlbumImage */.Iw, {
                image: image !== null && image !== void 0 ? image : ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* AlbumHeader */.yz, {
                        artist: artist,
                        name: name1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* AlbumData */.UV, {
                        albumArtist: albumArtist,
                        artist: artist,
                        songs: songs
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/home/index.tsx




const Home = ()=>{
    const { artists  } = (0,context/* useMusicfyContext */.RT)();
    const { 0: artistsToRender , 1: setArtistsToRender  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (artists) {
            setArtistsToRender(artists);
        }
    }, [
        artists
    ]);
    // Al hacer clic en agregar a favoritos se debe abrir una modal
    // canción, artista y tiempo
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "MUSICFY"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* Section */.$0, {
                title: "Tus favoritos",
                Container: components/* ArtistCard */.IT,
                itemsList: []
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* Section */.$0, {
                title: "Artistas",
                Container: components/* ArtistCard */.IT,
                itemsList: artistsToRender,
                showLoaders: true,
                CardForSearchBar: components/* ArtistItemList */.ok,
                propToLookingFor: "name"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* Section */.$0, {
                title: "Tus listas de reproducci\xf3n",
                Container: components/* ArtistCard */.IT,
                itemsList: []
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/index.ts





/***/ })

};
;