exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 8969:
/***/ ((module) => {

// Exports
module.exports = {
	"imageContainer": "AlbumCard_imageContainer__rZ4Fr",
	"container": "AlbumCard_container__Y5PCr"
};


/***/ }),

/***/ 3249:
/***/ ((module) => {

// Exports
module.exports = {
	"albumArtistTitle": "AlbumData_albumArtistTitle__lLl8_",
	"controlsContainer": "AlbumData_controlsContainer__yGsji",
	"play": "AlbumData_play__TBLBx",
	"saveList": "AlbumData_saveList__OP6OV",
	"quantitySongsContainer": "AlbumData_quantitySongsContainer___lim_"
};


/***/ }),

/***/ 6272:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AlbumHeader_container__GlwsQ",
	"linksContainer": "AlbumHeader_linksContainer__a_xex"
};


/***/ }),

/***/ 8192:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AlbumImage_container__OC14L",
	"imageContainer": "AlbumImage_imageContainer__Gy1vD",
	"compactDiscContainer": "AlbumImage_compactDiscContainer__WsYN6"
};


/***/ }),

/***/ 7885:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AlbumSongs_container__KU_Jq",
	"songContainer": "AlbumSongs_songContainer__qlIzy",
	"controlsContainer": "AlbumSongs_controlsContainer__Vtsdi"
};


/***/ }),

/***/ 8842:
/***/ ((module) => {

// Exports
module.exports = {
	"cardContainer": "ArtistCard_cardContainer__aaCkO",
	"imageContainer": "ArtistCard_imageContainer__MCQSR",
	"ratingContainer": "ArtistCard_ratingContainer__4HQ2W"
};


/***/ }),

/***/ 9485:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ArtistInfo_container__yREOJ",
	"imageContainer": "ArtistInfo_imageContainer__DNj_R",
	"headerContainer": "ArtistInfo_headerContainer__c_JOs",
	"iconsContainer": "ArtistInfo_iconsContainer__ysnri",
	"playButton": "ArtistInfo_playButton__HJGbf",
	"infoContainer": "ArtistInfo_infoContainer__MlCEC"
};


/***/ }),

/***/ 4782:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MusicPlayer_container__Tv8lt",
	"compactDiscContainer": "MusicPlayer_compactDiscContainer__pD1Ju",
	"controlsContainer": "MusicPlayer_controlsContainer__5dcUZ",
	"progressBarContainer": "MusicPlayer_progressBarContainer__1hDJy",
	"progressBar": "MusicPlayer_progressBar__YZYkR",
	"otherControlsContainer": "MusicPlayer_otherControlsContainer__8Em9z"
};


/***/ }),

/***/ 4091:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBarContainer": "SearchBar_searchBarContainer__RWXlG",
	"searchBarContainerOpen": "SearchBar_searchBarContainerOpen__OIfkm",
	"searchButtonContainer": "SearchBar_searchButtonContainer__fAjvB",
	"searchInput": "SearchBar_searchInput__Q3n9J",
	"searchListContainer": "SearchBar_searchListContainer__8zAzb",
	"searchListContainerOpen": "SearchBar_searchListContainerOpen__f6e4R"
};


/***/ }),

/***/ 6383:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SongSearchBarItem_container___x3UL",
	"buttonContainer": "SongSearchBarItem_buttonContainer__KZpsh",
	"button": "SongSearchBarItem_button__HYs86"
};


/***/ }),

/***/ 1925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rf": () => (/* reexport */ AlbumCard),
  "UV": () => (/* reexport */ AlbumData),
  "yz": () => (/* reexport */ AlbumHeader),
  "Iw": () => (/* reexport */ AlbumImage),
  "sv": () => (/* reexport */ AlbumSongs),
  "IT": () => (/* reexport */ ArtistCard),
  "Ig": () => (/* reexport */ ArtistInfo),
  "ok": () => (/* reexport */ ArtistItemList),
  "lr": () => (/* reexport */ Carousel),
  "YC": () => (/* reexport */ CompactDisc),
  "SK": () => (/* reexport */ Home),
  "_N": () => (/* reexport */ MusicPlayer),
  "NR": () => (/* reexport */ Musician),
  "o6": () => (/* reexport */ Next),
  "dz": () => (/* reexport */ Pause),
  "sh": () => (/* reexport */ Play),
  "v3": () => (/* reexport */ Plus),
  "L$": () => (/* reexport */ Previous),
  "E1": () => (/* reexport */ SearchBar),
  "W1": () => (/* reexport */ SearchIcon),
  "$0": () => (/* reexport */ Section),
  "KM": () => (/* reexport */ SongSearchBarItem)
});

// UNUSED EXPORTS: Heart, LabelCard, Spotify

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/AlbumComponents/AlbumCard/AlbumCard.module.css
var AlbumCard_module = __webpack_require__(8969);
var AlbumCard_module_default = /*#__PURE__*/__webpack_require__.n(AlbumCard_module);
;// CONCATENATED MODULE: ./src/components/AlbumComponents/AlbumCard/index.tsx




const { container , imageContainer ,  } = (AlbumCard_module_default());
const AlbumCard = ({ name , image , artist ,  })=>{
    const artistUrl = artist.replace(/ /g, "-").replace(/\//g, "-");
    const albumUrl = name.replace(/ /g, "_").replace(/\?/g, "qst");
    const href = `/${artistUrl}/${albumUrl}`;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: imageContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: artist
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./src/shared/hooks/index.ts + 2 modules
var hooks = __webpack_require__(9567);
// EXTERNAL MODULE: ./src/components/AlbumComponents/AlbumData/AlbumData.module.css
var AlbumData_module = __webpack_require__(3249);
var AlbumData_module_default = /*#__PURE__*/__webpack_require__.n(AlbumData_module);
;// CONCATENATED MODULE: ./src/components/AlbumComponents/AlbumData/index.tsx






const { albumArtistTitle , quantitySongsContainer , controlsContainer , play , saveList ,  } = (AlbumData_module_default());
const AlbumData = ({ artist , albumArtist , songs ,  })=>{
    const { newPlaylist  } = (0,hooks/* useManageMusicPlayer */.Ev)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/${artist}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: albumArtistTitle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: albumArtist
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: controlsContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>songs && newPlaylist(songs)
                        ,
                        className: play,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Play, {
                            fill: "var(--text-secondary-color)"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: saveList,
                        children: "Guardar"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: quantitySongsContainer,
                children: [
                    songs === null || songs === void 0 ? void 0 : songs.length,
                    " CANCIONES"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AlbumSongs, {
                songs: songs
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/AlbumComponents/AlbumHeader/AlbumHeader.module.css
var AlbumHeader_module = __webpack_require__(6272);
var AlbumHeader_module_default = /*#__PURE__*/__webpack_require__.n(AlbumHeader_module);
;// CONCATENATED MODULE: ./src/components/AlbumComponents/AlbumHeader/index.tsx





const { container: AlbumHeader_container , linksContainer ,  } = (AlbumHeader_module_default());
const AlbumHeader = ({ artist , name  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: AlbumHeader_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: linksContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {
                                fill: "var(--text-secondary-color)"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/${artist}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Musician, {
                                fill: "var(--text-secondary-color)",
                                stroke: "var(--text-secondary-color)",
                                strokeWidth: "3"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/AlbumComponents/AlbumImage/AlbumImage.module.css
var AlbumImage_module = __webpack_require__(8192);
var AlbumImage_module_default = /*#__PURE__*/__webpack_require__.n(AlbumImage_module);
;// CONCATENATED MODULE: ./src/components/AlbumComponents/AlbumImage/index.tsx



const { container: AlbumImage_container , imageContainer: AlbumImage_imageContainer , compactDiscContainer ,  } = (AlbumImage_module_default());
const AlbumImage = ({ image  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: AlbumImage_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: AlbumImage_imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: compactDiscContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CompactDisc, {})
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/AlbumComponents/AlbumSongs/AlbumSongs.module.css
var AlbumSongs_module = __webpack_require__(7885);
var AlbumSongs_module_default = /*#__PURE__*/__webpack_require__.n(AlbumSongs_module);
;// CONCATENATED MODULE: ./src/components/AlbumComponents/AlbumSongs/Song.tsx





const { songContainer , controlsContainer: Song_controlsContainer ,  } = (AlbumSongs_module_default());
const AlbumSong = (song)=>{
    const { name , duration_ms , itemId  } = song;
    const { playSong , addSong  } = (0,hooks/* useManageMusicPlayer */.Ev)();
    const duration = new Date(Number(duration_ms)).toISOString().substr(11, 8);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: songContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                children: [
                    itemId,
                    ". ",
                    name
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Song_controlsContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: duration
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>playSong(song)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Play, {
                            fill: "var(--text-secondary-color)"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>addSong(song)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Plus, {
                            fill: "var(--text-secondary-color)"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/AlbumComponents/AlbumSongs/index.tsx




const { container: AlbumSongs_container  } = (AlbumSongs_module_default());
const AlbumSongs = ({ songs  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ol", {
        className: AlbumSongs_container,
        children: songs === null || songs === void 0 ? void 0 : songs.map((song, index)=>{
            const { id , name  } = song;
            return /*#__PURE__*/ (0,external_react_.createElement)(AlbumSong, {
                ...song,
                key: `${id}-${name}`,
                itemId: index + 1
            });
        })
    });
};

;// CONCATENATED MODULE: ./src/components/AlbumComponents/index.ts






// EXTERNAL MODULE: external "@mui/material/Rating"
var Rating_ = __webpack_require__(802);
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_);
// EXTERNAL MODULE: ./src/components/ArtistComponents/ArtistCard/ArtistCard.module.css
var ArtistCard_module = __webpack_require__(8842);
var ArtistCard_module_default = /*#__PURE__*/__webpack_require__.n(ArtistCard_module);
;// CONCATENATED MODULE: ./src/components/ArtistComponents/ArtistCard/index.tsx




// estrallas usando el popularity
const { cardContainer , imageContainer: ArtistCard_imageContainer , ratingContainer ,  } = (ArtistCard_module_default());
const ArtistCard = ({ name , image , albums , songs , popularity  })=>{
    if (!image) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: name.replace(/ /g, "-").replace(/\//, "-"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: cardContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: ArtistCard_imageContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: name,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: ratingContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                            name: "read-only",
                            value: Number(popularity) / 20,
                            readOnly: true,
                            precision: 0.1,
                            size: "small"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "\xc1lbumes: ",
                            albums
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "Canciones: ",
                            songs
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./src/components/ArtistComponents/ArtistInfo/ArtistInfo.module.css
var ArtistInfo_module = __webpack_require__(9485);
var ArtistInfo_module_default = /*#__PURE__*/__webpack_require__.n(ArtistInfo_module);
;// CONCATENATED MODULE: ./src/components/ArtistComponents/ArtistInfo/index.tsx







const { container: ArtistInfo_container , imageContainer: ArtistInfo_imageContainer , headerContainer , playButton , infoContainer , iconsContainer ,  } = (ArtistInfo_module_default());
const ArtistInfo = ({ name , albums , image , popularity , songs , genres  })=>{
    const { 0: formatGenres , 1: setFormatGenres  } = (0,external_react_.useState)("");
    const songsData = (0,hooks/* useGetSongs */.ir)({
        by: "ARTIST",
        artist: name
    });
    const { newPlaylist  } = (0,hooks/* useManageMusicPlayer */.Ev)();
    (0,external_react_.useEffect)(()=>{
        const _formatGenres = genres.join(", ") // new Intl.ListFormat('es').format(genres)
        ;
        setFormatGenres(_formatGenres);
    }, [
        genres
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ArtistInfo_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: ArtistInfo_imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: headerContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: iconsContainer,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                                        items: songsData !== null && songsData !== void 0 ? songsData : [],
                                        ItemContainer: SongSearchBarItem,
                                        propToLookingFor: "name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Home, {
                                                    fill: "var(--text-primary-color)"
                                                }),
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                        name: "read-only",
                        value: Number(popularity) / 20,
                        readOnly: true,
                        precision: 0.1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>songsData && newPlaylist(songsData)
                        ,
                        className: playButton,
                        children: "Reproducir Artista"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: infoContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "\xc1lbumes: ",
                                    albums
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "Canciones: ",
                                    songs
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "G\xe9neros: ",
                                    formatGenres.replace(/_/g, " ")
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/ArtistComponents/ArtistItemList/index.tsx


const ArtistItemList = ({ name , image  })=>{
    if (!image) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: name.replace(/ /g, "-").replace(/\//, "-"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    margin: "10px 0",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            borderRadius: "50%",
                            overflow: "hidden",
                            backgroundColor: "#ff4",
                            height: "50px",
                            width: "50px",
                            minWidth: "50px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: "",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        style: {
                            margin: "0",
                            padding: "0 1rem",
                            fontSize: "20px"
                        },
                        children: name
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/ArtistComponents/index.ts




;// CONCATENATED MODULE: ./src/components/Carousel/index.tsx

const Carousel = ({ Container , itemsList  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        style: {
            display: "flex",
            overflowX: "scroll",
            gap: "10px",
            width: "100%",
            margin: "0",
            padding: "10px",
            scrollBehavior: "smooth"
        },
        children: itemsList.map((itemProps, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                style: {
                    listStyle: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                    ...itemProps
                })
            }, `${index}`)
        )
    });
};

// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(8782);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/HomeComponents/Section/index.tsx




const Loader = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_content_loader_default()), {
        speed: 2,
        width: 200,
        height: 300,
        viewBox: "0 0 200 300",
        backgroundColor: "var(--background-primary-contrast)",
        foregroundColor: "var(--background-secondary-contrast)",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "0",
                y: "0",
                rx: "3",
                ry: "3",
                width: "200",
                height: "200"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "0",
                y: "210",
                rx: "3",
                ry: "3",
                width: "200",
                height: "25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "0",
                y: "250",
                rx: "3",
                ry: "3",
                width: "200",
                height: "25"
            })
        ]
    })
;
const Section = ({ Container , itemsList , title , EmptyComponent , CardForSearchBar , propToLookingFor , showLoaders , numberOfLoaders ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    padding: "0 1rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: title
                    }),
                    itemsList.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                        items: itemsList,
                        ItemContainer: CardForSearchBar,
                        propToLookingFor: propToLookingFor
                    }) : null
                ]
            }),
            itemsList.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                Container: Container,
                itemsList: itemsList
            }) : showLoaders ? /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                Container: Loader,
                itemsList: Array.from({
                    length: numberOfLoaders !== null && numberOfLoaders !== void 0 ? numberOfLoaders : 6
                }, (_, i)=>i
                )
            }) : EmptyComponent ? /*#__PURE__*/ jsx_runtime_.jsx(EmptyComponent, {}) : "No hay resultados"
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/HomeComponents/index.ts


;// CONCATENATED MODULE: ./src/components/Icons/CompactDisc.tsx


const Lines = Array.from({
    length: 10
}, (_, i)=>10 + i * 2
);
const CompactDisc = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Compact Disc"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A line styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                "data-name": "layer2",
                cx: "32",
                cy: "32",
                r: "30",
                fill: "#1c1c1c",
                stroke: "#202020",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                "data-name": "layer1",
                cx: "32",
                cy: "32",
                r: "10",
                fill: "#2a2c2c",
                stroke: "#202020",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                "data-name": "layer1",
                cx: "32",
                cy: "32",
                r: "2",
                fill: "none",
                stroke: "#202020",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            Lines.map((line)=>/*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    "data-name": "layer1",
                    cx: "32",
                    cy: "32",
                    r: line,
                    fill: "none",
                    stroke: "#202020",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "0.5"
                }, line)
            )
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Heart.tsx


const Heart = ({ fill , stroke , strokeWidth  })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Romantic"
            }),
            /*#__PURE__*/ _jsx("desc", {
                children: "A line styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ _jsx("path", {
                "data-name": "layer2",
                d: "M44 11c-5.2 0-10.3 3.3-12 8-1.7-4.6-6.8-8-12-8A12 12 0 0 0 8 22.9C8 34.1 16.8 44.4 32 54c15.2-9.6 24-19.9 24-31.1A12 12 0 0 0 44 11z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020",
                stroke: stroke !== null && stroke !== void 0 ? stroke : "#202020",
                strokeMiterlimit: "10",
                strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : "2",
                strokeLinejoin: "round",
                strokeLinecap: "round"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Home.tsx


const Home = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "House"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M56 25l7.917 7.576c.175.169-.674.424-.917.424h-7v29a1 1 0 0 1-1 1H42a1 1 0 0 1-1-1V45a1 1 0 0 0-1-1H24a1 1 0 0 0-1 1v17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V33H1a.548.548 0 0 1-.381-.942L32 1.723l14.039 13.571-.026-4.281a2 2 0 0 1 2-2.012H54a2 2 0 0 1 2 2z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Musician.tsx


const Musician = ({ fill , stroke , strokeWidth  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Artist"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A line styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M46 26c0 6.1-3.4 11.5-7 14.8V44c0 2 1 5.1 11 7a15.5 15.5 0 0 1 12 11H2a13.4 13.4 0 0 1 11-11c10-1.8 12-5 12-7v-3.2c-3.6-3.3-7-8.6-7-14.8v-9.6C18 6 25.4 2 32 2s14 4 14 14.4z",
                fill: "none",
                stroke: stroke !== null && stroke !== void 0 ? stroke : "#202020",
                strokeMiterlimit: "10",
                strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : "2",
                strokeLinejoin: "round",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M38.6 4.6a22.2 22.2 0 0 1-5.5-2.3A2 2 0 0 0 30 4v38h-6a10 10 0 1 0 10 10V18.1c2.2.2 6.5.7 13.7 1.9a2 2 0 0 0 2.3-2c0-9.7-6.3-11.7-11.4-13.4z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Next.tsx


const Next = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Next"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm16 40a2 2 0 1 1-4 0V32L28 42.9v-6.8l-10 6.8V21.1l10 6.8v-6.8l16 10.8V22a2 2 0 1 1 4 0z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Pause.tsx


const Pause = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Pause"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm-4 42a2 2 0 0 1-4 0V20a2 2 0 0 1 4 0zm12 0a2 2 0 0 1-4 0V20a2 2 0 0 1 4 0z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Play.tsx


const Play = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Play"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm-8 44V18l24 14z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Plus.tsx


const Plus = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Add Circle"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M32 0a32 32 0 1 0 32 32A32.001 32.001 0 0 0 32 0zm16 34H34v14a2 2 0 1 1-4 0V34H16a2 2 0 0 1 0-4h14V16a2 2 0 1 1 4 0v14h14a2 2 0 0 1 0 4z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Previous.tsx


const Previous = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Previous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm14 40.9l-10-6.8v6.8L20 32v10a2 2 0 1 1-4 0V22a2 2 0 1 1 4 0v9.9l16-10.8v6.8l10-6.8z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/SearchIcon.tsx


const SearchIcon = ({ fill , stroke , strokeWidth  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Search"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A line styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer2",
                fill: fill !== null && fill !== void 0 ? fill : "none",
                stroke: stroke !== null && stroke !== void 0 ? stroke : "#202020",
                strokeMiterlimit: "10",
                strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : "2",
                d: "M39.049 39.049L56 56",
                strokeLinejoin: "round",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                "data-name": "layer1",
                cx: "27",
                cy: "27",
                r: "17",
                fill: fill !== null && fill !== void 0 ? fill : "none",
                stroke: stroke !== null && stroke !== void 0 ? stroke : "#202020",
                strokeMiterlimit: "10",
                strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : "2",
                strokeLinejoin: "round",
                strokeLinecap: "round"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/Spotify.tsx


const Spotify = ({ fill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Spotify"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("desc", {
                children: "A solid styled icon from Orion Icon Library."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "layer1",
                d: "M32 0a32 32 0 1 0 32 32A31.966 31.966 0 0 0 32 0zm12.3 47.2a2.654 2.654 0 0 1-1.4-.5 32.041 32.041 0 0 0-16.6-4.3 48.082 48.082 0 0 0-10.1 1.1 11.045 11.045 0 0 1-1.6.3 2 2 0 0 1-2-2 2.11 2.11 0 0 1 1.7-2.2 53.9 53.9 0 0 1 12-1.4A35.787 35.787 0 0 1 44.9 43a2.131 2.131 0 0 1 1.3 2.1 1.846 1.846 0 0 1-1.9 2.1zm3.5-8.5a2.834 2.834 0 0 1-1.6-.6A41.422 41.422 0 0 0 25.9 33a43.3 43.3 0 0 0-10.4 1.3 4.707 4.707 0 0 1-1.6.4 2.476 2.476 0 0 1-2.5-2.5 2.6 2.6 0 0 1 2-2.7A43.762 43.762 0 0 1 26 27.7a44.707 44.707 0 0 1 22.8 5.9 2.583 2.583 0 0 1 1.5 2.5 2.5 2.5 0 0 1-2.5 2.6zm4-9.8a3.022 3.022 0 0 1-1.6-.5C44.3 24.9 35.3 23 26.7 23a49.826 49.826 0 0 0-12.8 1.5 9.005 9.005 0 0 1-1.6.3 3.031 3.031 0 0 1-3-3.1 3.213 3.213 0 0 1 2.2-3.1 55.906 55.906 0 0 1 15.2-2c9.4 0 19.3 1.9 26.5 6.2a3.025 3.025 0 0 1 1.6 2.9 3.058 3.058 0 0 1-3 3.2z",
                fill: fill !== null && fill !== void 0 ? fill : "#202020"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/index.ts












;// CONCATENATED MODULE: ./src/components/LabelCard/index.tsx

const LabelCard = ({ backgroundColor ="#F2F" , children  })=>{
    return /*#__PURE__*/ _jsx("label", {
        style: {
            backgroundColor,
            borderRadius: "100px",
            padding: "5px 10px",
            width: "fit-content"
        },
        children: children
    });
};

// EXTERNAL MODULE: ./src/shared/context/index.ts + 2 modules
var context = __webpack_require__(3485);
// EXTERNAL MODULE: external "@mui/material/Slider"
var Slider_ = __webpack_require__(3682);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);
// EXTERNAL MODULE: ./src/components/MusicPlayer/MusicPlayer.module.css
var MusicPlayer_module = __webpack_require__(4782);
var MusicPlayer_module_default = /*#__PURE__*/__webpack_require__.n(MusicPlayer_module);
;// CONCATENATED MODULE: ./src/components/MusicPlayer/Controls.tsx




const { controlsContainer: Controls_controlsContainer ,  } = (MusicPlayer_module_default());
const Controls = ({ playing  })=>{
    const { next , previous , pause , play ,  } = (0,hooks/* useManageMusicPlayer */.Ev)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Controls_controlsContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: previous,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Previous, {
                    fill: "var(--text-primary-color)"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    if (!playing) {
                        play();
                    } else {
                        pause();
                    }
                },
                children: !playing ? /*#__PURE__*/ jsx_runtime_.jsx(Play, {
                    fill: "var(--text-primary-color)"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Pause, {
                    fill: "var(--text-primary-color)"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: next,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Next, {
                    fill: "var(--text-primary-color)"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/MusicPlayer/index.tsx










const { container: MusicPlayer_container , compactDiscContainer: MusicPlayer_compactDiscContainer , progressBar , progressBarContainer , otherControlsContainer  } = (MusicPlayer_module_default());
const formatTime = (time, inSeconds)=>{
    console.log({
        time
    });
    if (!time) return "00:00";
    time = inSeconds ? Number(time) : Number(time) / 1000;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
const MusicPlayer = ()=>{
    const { 0: currentTime1 , 1: setCurrentTime  } = (0,external_react_.useState)(0);
    const { 0: currentTimeFormated , 1: setCurrentTimeFormated  } = (0,external_react_.useState)("00:00");
    const audio = (0,external_react_.useRef)(null);
    const { setMusicPlayer  } = (0,context/* useMusicPlayerContext */.jn)();
    const { currentSong , currentPlaylist , playing , next ,  } = (0,hooks/* useManageMusicPlayer */.Ev)();
    var ref;
    const duration = formatTime((ref = currentSong === null || currentSong === void 0 ? void 0 : currentSong.duration_ms) !== null && ref !== void 0 ? ref : 0);
    (0,external_react_.useEffect)(()=>{
        setMusicPlayer(audio.current);
    }, [
        setMusicPlayer
    ]);
    (0,external_react_.useEffect)(()=>{
        const _formatedTime = formatTime(currentTime1, true);
        setCurrentTimeFormated(_formatedTime);
    }, [
        currentTime1
    ]);
    var _spotify_url;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: MusicPlayer_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: MusicPlayer_compactDiscContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CompactDisc, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Controls, {
                playing: playing
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: progressBarContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: currentSong === null || currentSong === void 0 ? void 0 : currentSong.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: progressBar,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: currentTimeFormated
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
                                    onChange: (_, value)=>{
                                        if (audio.current && typeof value === "number") {
                                            audio.current.currentTime = value;
                                        }
                                    },
                                    step: 0.0000001,
                                    max: 30,
                                    value: currentTime1
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: duration
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: otherControlsContainer,
                children: !(currentSong === null || currentSong === void 0 ? void 0 : currentSong.spotify_url) ? null : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: (_spotify_url = currentSong.spotify_url) !== null && _spotify_url !== void 0 ? _spotify_url : "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        target: "__blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Spotify, {
                            fill: "var(--text-primary-color)"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                ref: audio,
                src: currentSong === null || currentSong === void 0 ? void 0 : currentSong.preview_url,
                controls: true,
                preload: "preload",
                id: "test",
                onTimeUpdate: (e)=>{
                    const { currentTime  } = e.target;
                    setCurrentTime(currentTime);
                },
                onEnded: ()=>{
                    next();
                },
                style: {
                    display: "none"
                }
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/SearchBar/SearchBar.module.css
var SearchBar_module = __webpack_require__(4091);
var SearchBar_module_default = /*#__PURE__*/__webpack_require__.n(SearchBar_module);
;// CONCATENATED MODULE: ./src/components/SearchBar/components/SearchButton.tsx



const { searchButtonContainer ,  } = (SearchBar_module_default());
const SearchButton = ({ isOpen , setIsOpen  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: searchButtonContainer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            style: {
                background: "none",
                width: "35px",
                height: "35px",
                padding: "0",
                border: "none",
                outline: "none"
            },
            id: "search-button",
            onClick: ()=>setIsOpen(!isOpen)
            ,
            children: /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                stroke: "white",
                strokeWidth: "4"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/SearchBar/components/SearchInput.tsx


const { searchInput ,  } = (SearchBar_module_default());
const SearchInput = ({ setItemsToRender , items , isOpen , propToLookingFor  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        className: searchInput,
        type: "text",
        onChange: (e)=>{
            const { value  } = e.target;
            console.log({
                value,
                items,
                propToLookingFor
            });
            if (!value && items) setItemsToRender(items);
            else if (items) setItemsToRender(items === null || items === void 0 ? void 0 : items.filter((item)=>{
                var ref;
                return (ref = item[propToLookingFor]) === null || ref === void 0 ? void 0 : ref.toLowerCase().includes(value.toLowerCase());
            }));
        },
        onFocus: ()=>{
            if (!isOpen) {
                var ref;
                (ref = document.getElementById("search-button")) === null || ref === void 0 ? void 0 : ref.click();
            }
        },
        onBlur: ()=>{
            if (isOpen) {
                var ref;
                (ref = document.getElementById("search-button")) === null || ref === void 0 ? void 0 : ref.click();
            }
        }
    });
};

;// CONCATENATED MODULE: ./src/components/SearchBar/components/SearchList.tsx


const { searchListContainer , searchListContainerOpen ,  } = (SearchBar_module_default());
const SearchList = ({ isOpen , height , itemsToRender , ItemContainer ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: `${searchListContainer} ${isOpen ? searchListContainerOpen : ""}`,
        style: isOpen ? {
            height
        } : undefined,
        children: isOpen && (itemsToRender === null || itemsToRender === void 0 ? void 0 : itemsToRender.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                onClick: ()=>{
                    var ref;
                    (ref = document.getElementById("search-button")) === null || ref === void 0 ? void 0 : ref.click();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemContainer, {
                    ...item
                })
            }, index);
        }))
    });
};

;// CONCATENATED MODULE: ./src/components/SearchBar/components/index.ts




;// CONCATENATED MODULE: ./src/components/SearchBar/index.tsx




const { searchBarContainer , searchBarContainerOpen ,  } = (SearchBar_module_default());
const SearchBar = ({ items , ItemContainer =external_react_.Fragment , listHeight =300 , propToLookingFor ,  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: itemsToRender , 1: setItemsToRender  } = (0,external_react_.useState)(null);
    const escapeListener = (e)=>{
        var ref;
        console.log("hola");
        if (e.key === "Escape" && isOpen) (ref = document.getElementById("search-button")) === null || ref === void 0 ? void 0 : ref.click();
    };
    (0,external_react_.useEffect)(()=>{
        if (items) setItemsToRender(items);
    }, [
        items
    ]);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("keydown", escapeListener);
        return ()=>{
            document.removeEventListener("keydown", escapeListener);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${searchBarContainer} ${isOpen ? searchBarContainerOpen : ""}`,
                id: "search-bar-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchButton, {
                        setIsOpen: setIsOpen,
                        isOpen: isOpen
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchInput, {
                        setItemsToRender: setItemsToRender,
                        items: items,
                        setIsOpen: setIsOpen,
                        propToLookingFor: propToLookingFor !== null && propToLookingFor !== void 0 ? propToLookingFor : "",
                        isOpen: isOpen
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SearchList, {
                isOpen: isOpen,
                height: listHeight !== null && listHeight !== void 0 ? listHeight : 300,
                itemsToRender: itemsToRender,
                ItemContainer: ItemContainer
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/SongsComponents/SongSearchBarItem/SongSearchBarItem.module.css
var SongSearchBarItem_module = __webpack_require__(6383);
var SongSearchBarItem_module_default = /*#__PURE__*/__webpack_require__.n(SongSearchBarItem_module);
;// CONCATENATED MODULE: ./src/components/SongsComponents/SongSearchBarItem/index.tsx




const { container: SongSearchBarItem_container , buttonContainer , button: SongSearchBarItem_button ,  } = (SongSearchBarItem_module_default());
const SongSearchBarItem = (songData)=>{
    const { name ,  } = songData;
    const { addSong , playSong  } = (0,hooks/* useManageMusicPlayer */.Ev)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: SongSearchBarItem_container,
        children: [
            name,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: buttonContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: SongSearchBarItem_button,
                        onClick: ()=>playSong(songData)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Play, {
                                    fill: "var(--text-secondary-color)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Reproducir"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: SongSearchBarItem_button,
                        onClick: ()=>addSong(songData)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Plus, {
                                    fill: "var(--text-secondary-color)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Agregar"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/SongsComponents/index.ts


;// CONCATENATED MODULE: ./src/components/index.ts











/***/ }),

/***/ 3485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yw": () => (/* reexport */ MusicPlayerContextProvider),
  "Ac": () => (/* reexport */ MusicfyContextProvider),
  "jn": () => (/* reexport */ useMusicPlayerContext),
  "RT": () => (/* reexport */ useMusicfyContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/shared/context/MusicPlayer.tsx


const MusicPlayerContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const useMusicPlayerContext = ()=>(0,external_react_.useContext)(MusicPlayerContext)
;
const MusicPlayerContextProvider = ({ children  })=>{
    const { Provider  } = MusicPlayerContext;
    const { 0: currentSong , 1: setCurrentSong  } = (0,external_react_.useState)(null);
    const { 0: currentPlaylist , 1: setCurrentPlaylist  } = (0,external_react_.useState)(null);
    const { 0: musicPlayer , 1: setMusicPlayer  } = (0,external_react_.useState)(null);
    const { 0: playing , 1: setPlaying  } = (0,external_react_.useState)(false);
    const { 0: currentSongId , 1: setCurrentSongId  } = (0,external_react_.useState)(0);
    const context = {
        currentSong,
        setCurrentSong,
        currentPlaylist,
        setCurrentPlaylist,
        musicPlayer,
        setMusicPlayer,
        playing,
        setPlaying,
        currentSongId,
        setCurrentSongId
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Provider, {
        value: context,
        children: children
    });
};

// EXTERNAL MODULE: ./src/shared/hooks/useGetApiData.ts + 1 modules
var useGetApiData = __webpack_require__(9450);
// EXTERNAL MODULE: ./src/shared/hooks/useSanitizedArtistAndAlbums.ts
var useSanitizedArtistAndAlbums = __webpack_require__(6911);
;// CONCATENATED MODULE: ./src/shared/context/Musicfy.tsx




const MusicfyContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const useMusicfyContext = ()=>(0,external_react_.useContext)(MusicfyContext)
;
const MusicfyContextProvider = ({ children  })=>{
    const { Provider  } = MusicfyContext;
    const { apiAlbums , apiArtists , apiSongs ,  } = (0,useGetApiData/* useGetApiData */.G)();
    const { albums , artists  } = (0,useSanitizedArtistAndAlbums/* useSanitizedArtistAndAlbums */.V)({
        apiAlbums,
        apiArtists,
        apiSongs
    });
    const context = {
        artists,
        albums,
        apiSongs,
        apiAlbums
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Provider, {
        value: context,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/shared/context/index.ts




/***/ }),

/***/ 9567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ir": () => (/* reexport */ useGetSongs),
  "Ev": () => (/* reexport */ useManageMusicPlayer)
});

// UNUSED EXPORTS: useGetApiData, useSanitizedArtistAndAlbums

// EXTERNAL MODULE: ./src/shared/hooks/useGetApiData.ts + 1 modules
var useGetApiData = __webpack_require__(9450);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/context/index.ts + 2 modules
var context = __webpack_require__(3485);
;// CONCATENATED MODULE: ./src/shared/hooks/useGetSongs.ts


const useGetSongs = ({ by , artist , albumId  })=>{
    const { apiSongs , artists , albums  } = (0,context/* useMusicfyContext */.RT)();
    const { 0: songs1 , 1: setSongs  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (apiSongs) {
            if (by === "ALL_SONGS") {
                const songsData = [];
                const repeatedSongs = apiSongs.reduce((acc, { songs  })=>[
                        ...acc,
                        ...songs
                    ]
                , [
                    ...apiSongs[0].songs
                ]);
                new Set(repeatedSongs).forEach((songs)=>songsData.push(songs)
                );
                setSongs(songsData);
            }
            if (by === "ARTIST" && artist && artists) {
                var ref;
                const { albumsIds  } = (ref = artists.find(({ name  })=>name === artist
                )) !== null && ref !== void 0 ? ref : {};
                if (albumsIds) {
                    var ref1;
                    var ref2;
                    const firstSong = (ref2 = (ref1 = apiSongs.find(({ album  })=>{
                        return albumsIds === null || albumsIds === void 0 ? void 0 : albumsIds.includes(album);
                    })) === null || ref1 === void 0 ? void 0 : ref1.songs) !== null && ref2 !== void 0 ? ref2 : [];
                    const songsData = [];
                    const repeatedSongs = apiSongs.reduce((acc, { songs , album  })=>albumsIds.includes(album) ? [
                            ...acc,
                            ...songs
                        ] : acc
                    , firstSong);
                    new Set(repeatedSongs).forEach((songs)=>songsData.push(songs)
                    );
                    setSongs(songsData);
                }
            }
            if (by === "ALBUM" && albumId && albums && artist) {
                var ref3;
                var ref4;
                const { id: id1  } = (ref4 = albums[artist].find(({ id  })=>id === albumId
                )) !== null && ref4 !== void 0 ? ref4 : {};
                var ref5;
                const firstSong = (ref5 = (ref3 = apiSongs.find(({ album  })=>albumId === album
                )) === null || ref3 === void 0 ? void 0 : ref3.songs) !== null && ref5 !== void 0 ? ref5 : [];
                const songsData = [];
                const repeatedSongs = apiSongs.reduce((acc, { songs , album  })=>{
                    return album === id1 ? [
                        ...acc,
                        ...songs
                    ] : acc;
                }, firstSong);
                new Set(repeatedSongs).forEach((songs)=>songsData.push(songs)
                );
                setSongs(songsData);
            }
        }
    }, [
        apiSongs,
        by,
        artist,
        artists,
        albumId,
        albums
    ]);
    return songs1;
};

;// CONCATENATED MODULE: ./src/shared/hooks/useManageMusicPlayer.ts

const useManageMusicPlayer = ()=>{
    const { setCurrentPlaylist , setCurrentSong , currentPlaylist , currentSong , musicPlayer , currentSongId , setCurrentSongId , playing , setPlaying ,  } = (0,context/* useMusicPlayerContext */.jn)();
    const delayedPlay = ()=>{
        setTimeout(()=>{
            setPlaying(true);
            musicPlayer && musicPlayer.play();
        }, 100);
    };
    const next = ()=>{
        var ref;
        if (currentSongId < ((ref = currentPlaylist === null || currentPlaylist === void 0 ? void 0 : currentPlaylist.length) !== null && ref !== void 0 ? ref : 0) - 1) {
            setCurrentSongId((curr)=>{
                const newSongId = curr + 1;
                currentPlaylist && setCurrentSong(currentPlaylist[newSongId]);
                return newSongId;
            });
            delayedPlay();
        } else {
            setPlaying(false);
            if (musicPlayer) musicPlayer.currentTime = 0;
            currentPlaylist && setCurrentSong(currentPlaylist[0]);
            setCurrentSongId(0);
        }
    };
    const previous = ()=>{
        if (currentSongId > 0) {
            setCurrentSongId((curr)=>{
                const newSongId = curr - 1;
                currentPlaylist && setCurrentSong(currentPlaylist[newSongId]);
                delayedPlay();
                return newSongId;
            });
        }
    };
    const newPlaylist = (playlist)=>{
        setCurrentPlaylist(playlist);
        setCurrentSongId(0);
        setCurrentSong(playlist[0]);
        delayedPlay();
    };
    const playSong = (song)=>{
        setCurrentPlaylist([
            song
        ]);
        setCurrentSongId(0);
        setCurrentSong(song);
        delayedPlay();
    };
    const addSong = (song)=>{
        setCurrentPlaylist((curr)=>curr ? [
                ...curr,
                song
            ] : [
                song
            ]
        );
    };
    const play = ()=>{
        if (currentPlaylist) {
            if (!currentSong) {
                setCurrentSong(currentPlaylist[0]);
                delayedPlay();
            } else {
                setPlaying(true);
                musicPlayer && musicPlayer.play();
            }
        }
    };
    const pause = ()=>{
        if (currentPlaylist) {
            setPlaying(false);
            musicPlayer && musicPlayer.pause();
        }
    };
    return {
        next,
        previous,
        newPlaylist,
        playSong,
        addSong,
        play,
        pause,
        playing,
        currentSongId,
        currentPlaylist,
        currentSong
    };
};

// EXTERNAL MODULE: ./src/shared/hooks/useSanitizedArtistAndAlbums.ts
var useSanitizedArtistAndAlbums = __webpack_require__(6911);
;// CONCATENATED MODULE: ./src/shared/hooks/index.ts






/***/ }),

/***/ 9450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ useGetApiData)
});

;// CONCATENATED MODULE: ./src/shared/constants/index.ts
const BASE_URL_API = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api";
const ARTISTS_URL = `${BASE_URL_API}/artists`;
const ALBUMS_URL = `${BASE_URL_API}/artists/1/albums`;
const SONGS_URL = `${BASE_URL_API}/albums/1/songs`;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/shared/hooks/useGetApiData.ts


const useGetApiData = ()=>{
    const { 0: apiArtists , 1: setArtists  } = (0,external_react_.useState)(null);
    const { 0: apiSongs , 1: setSongs  } = (0,external_react_.useState)(null);
    const { 0: apiAlbums , 1: setAlbums  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const localArtists = localStorage.getItem("artists");
        if (!localArtists) {
            fetch(ARTISTS_URL).then((res)=>res.json()
            ).then((data)=>{
                setArtists(data);
            });
        }
        const localSongs = localStorage.getItem("songs");
        if (!localSongs) {
            fetch(SONGS_URL).then((res)=>res.json()
            ).then((data)=>{
                setSongs(data);
            });
        }
        const localAlbums = localStorage.getItem("albums");
        if (!localAlbums) {
            fetch(ALBUMS_URL).then((res)=>res.json()
            ).then((data)=>{
                setAlbums(data);
            });
        }
    }, []);
    return {
        apiArtists,
        apiSongs,
        apiAlbums
    };
};


/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useSanitizedArtistAndAlbums)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const getSongsInfo = (apiSongs, albumsIds)=>{
    const artistSongs = apiSongs.filter(({ album  })=>{
        return albumsIds === null || albumsIds === void 0 ? void 0 : albumsIds.includes(album);
    });
    const songsQuantity = artistSongs.reduce((acc, { songs  })=>acc + songs.length
    , 0);
    return {
        songsQuantity
    };
};
const getAlbumsInfo = (apiAlbums, artist1)=>{
    var ref;
    const { name: name1 , id: artistId  } = artist1;
    // La api retorna un array de albums. Algunos están repetidos.
    const repeatedAlbumsData = (ref = apiAlbums.filter(({ artist  })=>artist === artistId
    )[0]) === null || ref === void 0 ? void 0 : ref.albums;
    const albumsDataObject = {};
    repeatedAlbumsData === null || repeatedAlbumsData === void 0 ? void 0 : repeatedAlbumsData.forEach((album)=>{
        const { name  } = album;
        albumsDataObject[name] = album;
    });
    const albumsData = Object.values(albumsDataObject);
    const albums = albumsData === null || albumsData === void 0 ? void 0 : albumsData.map((albumData)=>({
            ...albumData,
            artist: name1
        })
    );
    const albumsIds = albumsData === null || albumsData === void 0 ? void 0 : albumsData.map(({ id  })=>id
    );
    const albumsQuantity = albumsData ? albumsData.length : 0;
    return {
        albums,
        albumsIds,
        albumsQuantity
    };
};
const useSanitizedArtistAndAlbums = ({ apiAlbums , apiArtists , apiSongs ,  })=>{
    const { 0: artists , 1: setArtists  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: albums1 , 1: setAlbums  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const localArtist = localStorage.getItem("Artists");
        if (localArtist) {
            setArtists(JSON.parse(localArtist));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!artists && apiAlbums && apiArtists && apiSongs) {
            // Obtemos el objeto artist con las propiedades faltantes
            // Aprovechamos los bucles para obtener los albumes
            const _artists = apiArtists.map((artist)=>{
                const { name  } = artist;
                const { albums , albumsIds , albumsQuantity ,  } = getAlbumsInfo(apiAlbums, artist);
                setAlbums((prevAlbums)=>prevAlbums ? {
                        ...prevAlbums,
                        [name]: albums
                    } : {
                        [name]: albums
                    }
                );
                const { songsQuantity  } = getSongsInfo(apiSongs, albumsIds);
                return {
                    ...artist,
                    albums: albumsQuantity,
                    songs: songsQuantity,
                    albumsIds
                };
            });
            setArtists(_artists);
        // localStorage.setItem('Artists', JSON.stringify(_artists))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        apiAlbums,
        apiArtists,
        apiSongs
    ]);
    return {
        artists,
        albums: albums1
    };
};


/***/ })

};
;