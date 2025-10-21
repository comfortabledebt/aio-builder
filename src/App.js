import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
    const [inputDebrid, setInputDebrid] = useState("");
    const [inputDebridio, setInputDebridio] = useState("");
    const [inputIsSamsung, setInputIsSamsung] = useState(false);
    const [inputTMDBApiKey, setInputTMDBApiKey] = useState("");
    const [inputTMDBReadAccessToken, setInputTMDBReadAccessToken] = useState("");
    const [fadeIn, setFadeIn] = useState(false);
    const hateMessage = 'The borderline useless';

    useEffect(() => {
        // Trigger fade-in on mount
        setTimeout(() => setFadeIn(true), 100);
    }, []);

    const handleGenerateFile = () => {
        const contentWithDebridioDV =
`{
  "services": [
    {
      "id": "realdebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "alldebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "premiumize",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debridlink",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "torbox",
      "enabled": true,
      "credentials": {
        "apiKey": "${inputDebrid}"
      }
    },
    {
      "id": "offcloud",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "putio",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easynews",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easydebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debrider",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "pikpak",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "seedr",
      "enabled": false,
      "credentials": {}
    }
  ],
  "presets": [
    {
      "type": "debridio-tmdb",
      "instanceId": "d11",
      "enabled": true,
      "options": {
        "name": "Debridio TMDB",
        "timeout": 15000,
        "resources": [
          "catalog",
          "meta"
        ],
        "debridioApiKey": "${inputDebridio}",
        "language": "en-US"
      }
    },
    {
      "type": "debridio-tvdb",
      "instanceId": "f8f",
      "enabled": true,
      "options": {
        "name": "Debridio TVDB",
        "timeout": 15000,
        "resources": [
          "catalog",
          "meta"
        ],
        "debridioApiKey": "${inputDebridio}"
      }
    },
    {
      "type": "streaming-catalogs",
      "instanceId": "dfc",
      "enabled": true,
      "options": {
        "name": "Streaming Catalogs",
        "timeout": 15000,
        "resources": [
          "catalog"
        ],
        "catalogs": [
          "nfx",
          "hbm",
          "dnp",
          "amp",
          "atp",
          "sst",
          "pmp",
          "pcp",
          "hlu",
          "stz",
          "mbi",
          "dpe"
        ]
      }
    },
    {
      "type": "debridio-tv",
      "instanceId": "9dc",
      "enabled": true,
      "options": {
        "name": "Debridio TV",
        "timeout": 15000,
        "resources": [
          "catalog",
          "meta",
          "stream"
        ],
        "debridioApiKey": "${inputDebridio}",
        "channels": [
          "au",
          "br",
          "ca",
          "cl",
          "es",
          "events",
          "fr",
          "it",
          "in",
          "mx",
          "nz",
          "uk",
          "usa_locals",
          "usa",
          "za",
          "search"
        ],
        "resultPassthrough": true
      }
    },
    {
      "type": "newznab",
      "instanceId": "c88",
      "enabled": true,
      "options": {
        "name": "Newznab",
        "newznabUrl": "https://search-api.torbox.app/newznab",
        "apiKey": "${inputDebrid}",
        "apiPath": "/api",
        "timeout": 15000,
        "mediaTypes": [],
        "forceQuerySearch": true
      }
    },
    {
      "type": "debridio",
      "instanceId": "350",
      "enabled": true,
      "options": {
        "name": "Debridio Scraper",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "debridioApiKey": "${inputDebridio}",
        "mediaTypes": []
      }
    },
    {
      "type": "torrentio",
      "instanceId": "e1b",
      "enabled": true,
      "options": {
        "name": "Torrentio",
        "timeout": 15000,
        "resources": [
          "stream",
          "catalog",
          "meta"
        ],
        "providers": [],
        "useMultipleInstances": false
      }
    },
    {
      "type": "stremthruTorz",
      "instanceId": "1ec",
      "enabled": true,
      "options": {
        "name": "StremThru Torz",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "mediaTypes": [],
        "includeP2P": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "comet",
      "instanceId": "e3a",
      "enabled": true,
      "options": {
        "name": "Comet",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "includeP2P": false,
        "removeTrash": true,
        "mediaTypes": []
      }
    },
    {
      "type": "torbox-search",
      "instanceId": "5fe",
      "enabled": true,
      "options": {
        "name": "TorBox Search",
        "timeout": 15000,
        "sources": [
          "torrent",
          "usenet"
        ],
        "mediaTypes": [],
        "userSearchEngines": false,
        "onlyShowUserSearchResults": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "opensubtitles-v3-plus",
      "instanceId": "42c",
      "enabled": true,
      "options": {
        "name": "OpenSubtitles V3+",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "language": [
          "en"
        ],
        "sources": "all",
        "includeAiTranslated": true,
        "movieHashPlusAutoAdjustment": true
      }
    },
    {
      "type": "subhero",
      "instanceId": "e84",
      "enabled": true,
      "options": {
        "name": "SubHero",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "en"
        ]
      }
    },
    {
      "type": "aiosubtitle",
      "instanceId": "2db",
      "enabled": true,
      "options": {
        "name": "AIOSubtitle",
        "timeout": 10000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "english"
        ],
        "microsoftTranslatorRegion": "global"
      }
    }
  ],
  "formatter": {
    "id": "custom",
    "definition": {
        "name": "{stream.resolution::=2160p[\\"🚀4K⁠⁠⁠ ⁠\\"||\\"\\"]}{stream.resolution::=1440p[\\"🚀 1440P⁠⁠ \\"||\\"\\"]}{stream.resolution::=1080p[\\"🔥 1080P \\"||\\"\\"]}{stream.resolution::=720p[\\"💿 720P \\"||\\"\\"]}{stream.resolution::=576p[\\"📼 576P \\"||\\"\\"]}{stream.resolution::=480p[\\"📼 480P \\"||\\"\\"]}{stream.resolution::exists[\\"\\"||\\"❔ Unknown Resolution\\"]}\\n{stream.quality::~REMUX[\\"📀 Remux \\"||\\"\\"]}{stream.quality::=BluRay[\\"💿 BluRay \\"||\\"\\"]}{stream.quality::~DL[\\"🌐 WEBDL \\"||\\"\\"]}{stream.quality::=WEBRIP[\\"🖥 WEBRip ⁠\\"||\\"\\"]}{stream.quality::=HDRIP[\\"💾 HDRip ⁠\\"||\\"\\"]}{stream.quality::~HC[\\"💾 HC \\"||\\"\\"]}{stream.quality::=DVDRip[\\"💾 DVDRip \\"||\\"\\"]}{stream.quality::=HDTV[\\"💾 HDTV \\"||\\"\\"]}{stream.quality::=TS[\\"💾 TS \\"||\\"\\"]}{stream.quality::=TC[\\"💾 TC \\"||\\"\\"]}\\n{stream.regexMatched::exists::and::stream.regexMatched::~Bad[\\"🔴 {stream.regexMatched} \\"||\\"\\"]}{stream.regexMatched::~Remux T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Remux T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Remux T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Bluray T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Bluray T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Bluray T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T4[\\"🟡 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T5[\\"🟡 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T6[\\"🟠 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T7[\\"🟠 Tier 7 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T8[\\"🔴 Tier 8 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T1[\\"🟡 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T2[\\"🟠 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T4[\\"🔴 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T5[\\"🔴 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T6[\\"🔴 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Web T1[\\"🟠 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Web T2[\\"🔴 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}\\n{stream.filename::~extended[\\"🎬 Extended \\"||\\"\\"]}{stream.filename::~director[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~dc[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~theatrical[\\"🎭 Theatrical Cut \\"||\\"\\"]}{stream.filename::~assembly[\\"📼 Assembly Cut \\"||\\"\\"]}{stream.filename::~producers[\\"🏟️ Producer’s Cut \\"||\\"\\"]}{stream.filename::~ultimate[\\"💎 Ultimate Cut \\"||\\"\\"]}{stream.filename::~alternate[\\"🔀 Alternative Cut \\"||\\"\\"]}{stream.filename::~redux[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~rdx[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~complete[\\"📦 Complete Cut \\"||\\"\\"]}{stream.filename::~special[\\"🎁 Special Edition \\"||\\"\\"]}{stream.filename::~anniversary[\\"🎉 Anniversary Edition \\"||\\"\\"]}{stream.filename::~imax[\\"🏟️ IMAX Edition \\"||\\"\\"]}{stream.filename::~remastered[\\"✨ Remastered \\"||\\"\\"]}{stream.filename::~restored[\\"📜 Restored Cut \\"||\\"\\"]}{stream.filename::~collectors[\\"🎖️ Collector’s Edition \\"||\\"\\"]}{stream.filename::~unrated[\\"🚫 Unrated \\"||\\"\\"]}{stream.filename::~uncensored[\\"🔞 Uncensored \\"||\\"\\"]}{stream.filename::~workprint[\\"🧪 Workprint \\"||\\"\\"]}{stream.filename::~preview[\\"👀 Preview Cut \\"||\\"\\"]}{stream.filename::~festival[\\"🏆 Festival Cut \\"||\\"\\"]}{stream.filename::~tv[\\"📺 TV Cut \\"||\\"\\"]}{stream.filename::~international[\\"🌍 International Cut \\"||\\"\\"]}{stream.filename::~us[\\"🇺🇸 U.S. Cut \\"||\\"\\"]}{stream.filename::~european[\\"🇪🇺 European Cut \\"||\\"\\"]}{stream.filename::~japanese[\\"🇯🇵 Japanese Cut \\"||\\"\\"]}\\n{stream.type::~p2p[\\"🔗 P2P 🌱 {stream.seeders}\\"||\\"\\"]}",
        "description": "--------------------------------\\n{service.cached::istrue[\\"⚡Ready \\"||\\"\\"]}{service.cached::isfalse[\\"❌ Not Ready \\"||\\"\\"]}{service.id::exists[\\"({service.shortName}) \\"||\\"\\"]}\\n{stream.type::=Usenet[\\"📰 Usenet \\"||\\"\\"]}{stream.type::=p2p[\\"⚠️ P2P \\"||\\"\\"]}{stream.type::=http[\\"💻 Web Link \\"||\\"\\"]}{stream.type::=youtube[\\"▶️ Youtube \\"||\\"\\"]}{stream.type::=live[\\"📺 Live \\"||\\"\\"]} 🔍 {addon.name}  {service.cached::isfalse::and::stream.type::=debrid::and::stream.seeders::>=0[\\"👥 {stream.seeders} \\"||\\"\\"]}\\n--------------------------------\\n{stream.title::exists[\\"🎬 {stream.title::title} \\"||\\"\\"]}{stream.year::exists[\\"({stream.year}) \\"||\\"\\"]}{stream.season::>=0[\\"• S\\"||\\"\\"]}{stream.season::<=9[\\"0\\"||\\"\\"]}{stream.season::>0[\\"{stream.season} \\"||\\"\\"]}{stream.episode::>=0[\\" E\\"||\\"\\"]}{stream.episode::<=9[\\"0\\"||\\"\\"]}{stream.episode::>0[\\"{stream.episode} \\"||\\"\\"]}\\n{stream.visualTags::exists[\\"🖥️ {stream.visualTags::join(' | ')} \\"||\\"\\"]}{stream.encode::exists[\\" 📺 {stream.encode} \\"||\\"\\"]}\\n{stream.audioTags::exists[\\"🎧 {stream.audioTags::join(' | ')} \\"||\\"\\"]}{stream.audioChannels::exists[\\" 🔊 {stream.audioChannels::join(' | ')}\\"||\\"\\"]}\\n{stream.quality::exists[\\"🎥 {stream.quality} \\"||\\"\\"]} {stream.size::>0[\\"📦 {stream.size::bytes} \\"||\\"\\"]}{stream.folderSize::>0[\\"/ {stream.folderSize::bytes} \\"||\\"\\"]} \\n{stream.releaseGroup::exists[\\"🏷️ {stream.releaseGroup} \\"||\\"\\"]}{stream.indexer::exists[\\" 📡 {stream.indexer}\\"||\\"\\"]}\\n{stream.message::exists[\\"ℹ️ {stream.message}\\"||\\"\\"]}\\n{stream.languages::exists[\\"🗣️ {stream.languages::join(' | ')}\\"||\\"\\"]}"
    }
  },
  "preferredQualities": [
    "BluRay REMUX",
    "BluRay",
    "WEB-DL",
    "WEBRip",
    "HDRip",
    "HC HD-Rip",
    "DVDRip",
    "HDTV",
    "CAM",
    "TS",
    "TC",
    "SCR",
    "Unknown"
  ],
  "preferredResolutions": [
    "2160p",
    "1440p",
    "1080p",
    "720p",
    "576p",
    "480p",
    "360p",
    "240p",
    "144p",
    "Unknown"
  ],
  "excludedQualities": [],
  "excludedVisualTags": [
    "3D"
  ],
  "sortCriteria": {
    "global": [
      {
        "key": "cached",
        "direction": "desc"
      }
    ],
    "movies": [],
    "cached": [
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncached": [
      {
        "key": "streamType",
        "direction": "desc"
      },
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "addon",
        "direction": "desc"
      },
      {
        "key": "seeders",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncachedMovies": [],
    "uncachedSeries": []
  },
  "deduplicator": {
    "enabled": true,
    "keys": [
      "filename",
      "infoHash"
    ],
    "multiGroupBehaviour": "aggressive",
    "cached": "single_result",
    "uncached": "per_service",
    "p2p": "single_result"
  },
  "proxy": {
    "id": "mediaflow",
    "proxiedServices": [],
    "proxiedAddons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "enabled": false,
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "excludeUncachedFromAddons": [],
  "excludeUncachedFromServices": [],
  "excludeUncachedFromStreamTypes": [],
  "excludeCachedFromAddons": [],
  "excludeCachedFromServices": [],
  "excludeCachedFromStreamTypes": [],
  "preferredEncodes": [
    "AV1",
    "HEVC",
    "AVC",
    "XviD",
    "DivX",
    "Unknown"
  ],
  "preferredStreamTypes": [
    "usenet",
    "debrid",
    "http"
  ],
  "preferredVisualTags": [
    "DV",
    "HDR10",
    "HDR",
    "HDR10+",
    "IMAX",
    "10bit",
    "SDR"
  ],
  "preferredAudioTags": [
    "Atmos",
    "TrueHD",
    "DTS-HD MA",
    "DTS-HD",
    "DTS-ES",
    "DD+",
    "DTS",
    "DD",
    "FLAC",
    "OPUS",
    "AAC",
    "Unknown"
  ],
  "catalogModifications": [
    {
      "id": "d11e3b0.debridio_tmdb.movie_trending",
      "name": "(Debridio TMDB) - Trending Movies",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "movie"
    },
    {
      "id": "d11e3b0.debridio_tmdb.movie_popular",
      "name": "(Debridio TMDB) - Popular Movies",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "movie"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.tv_trending",
      "name": "(Debridio TVDB) - Trending Series",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.search_movie",
      "name": "(Debridio TMDB) - Search",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "movie"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.search_series",
      "name": "(Debridio TVDB) - Search",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.search_collections",
      "name": "(Debridio TMDB) - Collection Search",
      "type": "collections",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "collections"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.movie_trending",
      "name": "(Debridio TVDB) - Trending Movies",
      "type": "movie",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "movie"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.search_movie",
      "name": "(Debridio TVDB) - Search",
      "type": "movie",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "movie"
    },
    {
      "id": "d11e3b0.debridio_tmdb.search_series",
      "name": "(Debridio TMDB) - Search",
      "type": "series",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.tv_popular",
      "name": "(Debridio TMDB) - Popular Series",
      "type": "series",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.tv_trending",
      "name": "(Debridio TMDB) - Trending Series",
      "type": "series",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "series"
    },
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.mbi",
      "name": "Mubi",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dpe",
      "name": "Discovery+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "9dce3b0.au",
      "name": "Australia TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.br",
      "name": "Brasil TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.ca",
      "name": "Canada TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.cl",
      "name": "Chile TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.es",
      "name": "Spain TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.events",
      "name": "Live Events TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.fr",
      "name": "France TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.it",
      "name": "Italy TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.in",
      "name": "India TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.mx",
      "name": "Mexico TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.nz",
      "name": "New Zealand TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.uk",
      "name": "United Kingdom TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.usa_locals",
      "name": "United States Locals TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.usa",
      "name": "United States TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.za",
      "name": "South Africa TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.search",
      "name": "Debridio TV - Search",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TV"
    }
  ],
  "groups": {
    "enabled": false
  },
  "dynamicAddonFetching": {
    "enabled": false
  },
  "requiredResolutions": [],
  "excludedResolutions": [],
  "includedResolutions": [],
  "requiredQualities": [],
  "includedQualities": [],
  "requiredEncodes": [],
  "excludedEncodes": [],
  "includedEncodes": [],
  "requiredStreamTypes": [],
  "excludedStreamTypes": [],
  "includedStreamTypes": [],
  "requiredVisualTags": [],
  "includedVisualTags": [],
  "requiredAudioTags": [],
  "excludedAudioTags": [],
  "includedAudioTags": [],
  "requiredAudioChannels": [],
  "excludedAudioChannels": [],
  "includedAudioChannels": [],
  "preferredAudioChannels": [],
  "requiredLanguages": [],
  "excludedLanguages": [],
  "includedLanguages": [],
  "preferredLanguages": [],
  "seederRangeTypes": [],
  "titleMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true
  },
  "yearMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true,
    "tolerance": 5
  },
  "seasonEpisodeMatching": {
    "requestTypes": [],
    "addons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "tmdbAccessToken": "${inputTMDBReadAccessToken}"
}`;

        const contentWithDebridioHDR10Plus =
            `{
  "services": [
    {
      "id": "realdebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "alldebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "premiumize",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debridlink",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "torbox",
      "enabled": true,
      "credentials": {
        "apiKey": "${inputDebrid}"
      }
    },
    {
      "id": "offcloud",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "putio",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easynews",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easydebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debrider",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "pikpak",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "seedr",
      "enabled": false,
      "credentials": {}
    }
  ],
  "presets": [
    {
      "type": "debridio-tmdb",
      "instanceId": "d11",
      "enabled": true,
      "options": {
        "name": "Debridio TMDB",
        "timeout": 15000,
        "resources": [
          "catalog",
          "meta"
        ],
        "debridioApiKey": "${inputDebridio}",
        "language": "en-US"
      }
    },
    {
      "type": "debridio-tvdb",
      "instanceId": "f8f",
      "enabled": true,
      "options": {
        "name": "Debridio TVDB",
        "timeout": 15000,
        "resources": [
          "catalog",
          "meta"
        ],
        "debridioApiKey": "${inputDebridio}"
      }
    },
    {
      "type": "streaming-catalogs",
      "instanceId": "dfc",
      "enabled": true,
      "options": {
        "name": "Streaming Catalogs",
        "timeout": 15000,
        "resources": [
          "catalog"
        ],
        "catalogs": [
          "nfx",
          "hbm",
          "dnp",
          "amp",
          "atp",
          "sst",
          "pmp",
          "pcp",
          "hlu",
          "stz",
          "mbi",
          "dpe"
        ]
      }
    },
    {
      "type": "debridio-tv",
      "instanceId": "9dc",
      "enabled": true,
      "options": {
        "name": "Debridio TV",
        "timeout": 15000,
        "resources": [
          "catalog",
          "meta",
          "stream"
        ],
        "debridioApiKey": "${inputDebridio}",
        "channels": [
          "au",
          "br",
          "ca",
          "cl",
          "es",
          "events",
          "fr",
          "it",
          "in",
          "mx",
          "nz",
          "uk",
          "usa_locals",
          "usa",
          "za",
          "search"
        ],
        "resultPassthrough": true
      }
    },
    {
      "type": "newznab",
      "instanceId": "c88",
      "enabled": true,
      "options": {
        "name": "Newznab",
        "newznabUrl": "https://search-api.torbox.app/newznab",
        "apiKey": "${inputDebrid}",
        "apiPath": "/api",
        "timeout": 15000,
        "mediaTypes": [],
        "forceQuerySearch": true
      }
    },
    {
      "type": "debridio",
      "instanceId": "350",
      "enabled": true,
      "options": {
        "name": "Debridio Scraper",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "debridioApiKey": "${inputDebridio}",
        "mediaTypes": []
      }
    },
    {
      "type": "torrentio",
      "instanceId": "e1b",
      "enabled": true,
      "options": {
        "name": "Torrentio",
        "timeout": 15000,
        "resources": [
          "stream",
          "catalog",
          "meta"
        ],
        "providers": [],
        "useMultipleInstances": false
      }
    },
    {
      "type": "stremthruTorz",
      "instanceId": "1ec",
      "enabled": true,
      "options": {
        "name": "StremThru Torz",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "mediaTypes": [],
        "includeP2P": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "comet",
      "instanceId": "e3a",
      "enabled": true,
      "options": {
        "name": "Comet",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "includeP2P": false,
        "removeTrash": true,
        "mediaTypes": []
      }
    },
    {
      "type": "torbox-search",
      "instanceId": "5fe",
      "enabled": true,
      "options": {
        "name": "TorBox Search",
        "timeout": 15000,
        "sources": [
          "torrent",
          "usenet"
        ],
        "mediaTypes": [],
        "userSearchEngines": false,
        "onlyShowUserSearchResults": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "opensubtitles-v3-plus",
      "instanceId": "42c",
      "enabled": true,
      "options": {
        "name": "OpenSubtitles V3+",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "language": [
          "en"
        ],
        "sources": "all",
        "includeAiTranslated": true,
        "movieHashPlusAutoAdjustment": true
      }
    },
    {
      "type": "subhero",
      "instanceId": "e84",
      "enabled": true,
      "options": {
        "name": "SubHero",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "en"
        ]
      }
    },
    {
      "type": "aiosubtitle",
      "instanceId": "2db",
      "enabled": true,
      "options": {
        "name": "AIOSubtitle",
        "timeout": 10000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "english"
        ],
        "microsoftTranslatorRegion": "global"
      }
    }
  ],
  "formatter": {
    "id": "custom",
    "definition": {
        "name": "{stream.resolution::=2160p[\\"🚀4K⁠⁠⁠ ⁠\\"||\\"\\"]}{stream.resolution::=1440p[\\"🚀 1440P⁠⁠ \\"||\\"\\"]}{stream.resolution::=1080p[\\"🔥 1080P \\"||\\"\\"]}{stream.resolution::=720p[\\"💿 720P \\"||\\"\\"]}{stream.resolution::=576p[\\"📼 576P \\"||\\"\\"]}{stream.resolution::=480p[\\"📼 480P \\"||\\"\\"]}{stream.resolution::exists[\\"\\"||\\"❔ Unknown Resolution\\"]}\\n{stream.quality::~REMUX[\\"📀 Remux \\"||\\"\\"]}{stream.quality::=BluRay[\\"💿 BluRay \\"||\\"\\"]}{stream.quality::~DL[\\"🌐 WEBDL \\"||\\"\\"]}{stream.quality::=WEBRIP[\\"🖥 WEBRip ⁠\\"||\\"\\"]}{stream.quality::=HDRIP[\\"💾 HDRip ⁠\\"||\\"\\"]}{stream.quality::~HC[\\"💾 HC \\"||\\"\\"]}{stream.quality::=DVDRip[\\"💾 DVDRip \\"||\\"\\"]}{stream.quality::=HDTV[\\"💾 HDTV \\"||\\"\\"]}{stream.quality::=TS[\\"💾 TS \\"||\\"\\"]}{stream.quality::=TC[\\"💾 TC \\"||\\"\\"]}\\n{stream.regexMatched::exists::and::stream.regexMatched::~Bad[\\"🔴 {stream.regexMatched} \\"||\\"\\"]}{stream.regexMatched::~Remux T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Remux T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Remux T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Bluray T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Bluray T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Bluray T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T4[\\"🟡 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T5[\\"🟡 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T6[\\"🟠 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T7[\\"🟠 Tier 7 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T8[\\"🔴 Tier 8 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T1[\\"🟡 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T2[\\"🟠 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T4[\\"🔴 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T5[\\"🔴 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T6[\\"🔴 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Web T1[\\"🟠 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Web T2[\\"🔴 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}\\n{stream.filename::~extended[\\"🎬 Extended \\"||\\"\\"]}{stream.filename::~director[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~dc[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~theatrical[\\"🎭 Theatrical Cut \\"||\\"\\"]}{stream.filename::~assembly[\\"📼 Assembly Cut \\"||\\"\\"]}{stream.filename::~producers[\\"🏟️ Producer’s Cut \\"||\\"\\"]}{stream.filename::~ultimate[\\"💎 Ultimate Cut \\"||\\"\\"]}{stream.filename::~alternate[\\"🔀 Alternative Cut \\"||\\"\\"]}{stream.filename::~redux[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~rdx[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~complete[\\"📦 Complete Cut \\"||\\"\\"]}{stream.filename::~special[\\"🎁 Special Edition \\"||\\"\\"]}{stream.filename::~anniversary[\\"🎉 Anniversary Edition \\"||\\"\\"]}{stream.filename::~imax[\\"🏟️ IMAX Edition \\"||\\"\\"]}{stream.filename::~remastered[\\"✨ Remastered \\"||\\"\\"]}{stream.filename::~restored[\\"📜 Restored Cut \\"||\\"\\"]}{stream.filename::~collectors[\\"🎖️ Collector’s Edition \\"||\\"\\"]}{stream.filename::~unrated[\\"🚫 Unrated \\"||\\"\\"]}{stream.filename::~uncensored[\\"🔞 Uncensored \\"||\\"\\"]}{stream.filename::~workprint[\\"🧪 Workprint \\"||\\"\\"]}{stream.filename::~preview[\\"👀 Preview Cut \\"||\\"\\"]}{stream.filename::~festival[\\"🏆 Festival Cut \\"||\\"\\"]}{stream.filename::~tv[\\"📺 TV Cut \\"||\\"\\"]}{stream.filename::~international[\\"🌍 International Cut \\"||\\"\\"]}{stream.filename::~us[\\"🇺🇸 U.S. Cut \\"||\\"\\"]}{stream.filename::~european[\\"🇪🇺 European Cut \\"||\\"\\"]}{stream.filename::~japanese[\\"🇯🇵 Japanese Cut \\"||\\"\\"]}\\n{stream.type::~p2p[\\"🔗 P2P 🌱 {stream.seeders}\\"||\\"\\"]}",
        "description": "--------------------------------\\n{service.cached::istrue[\\"⚡Ready \\"||\\"\\"]}{service.cached::isfalse[\\"❌ Not Ready \\"||\\"\\"]}{service.id::exists[\\"({service.shortName}) \\"||\\"\\"]}\\n{stream.type::=Usenet[\\"📰 Usenet \\"||\\"\\"]}{stream.type::=p2p[\\"⚠️ P2P \\"||\\"\\"]}{stream.type::=http[\\"💻 Web Link \\"||\\"\\"]}{stream.type::=youtube[\\"▶️ Youtube \\"||\\"\\"]}{stream.type::=live[\\"📺 Live \\"||\\"\\"]} 🔍 {addon.name}  {service.cached::isfalse::and::stream.type::=debrid::and::stream.seeders::>=0[\\"👥 {stream.seeders} \\"||\\"\\"]}\\n--------------------------------\\n{stream.title::exists[\\"🎬 {stream.title::title} \\"||\\"\\"]}{stream.year::exists[\\"({stream.year}) \\"||\\"\\"]}{stream.season::>=0[\\"• S\\"||\\"\\"]}{stream.season::<=9[\\"0\\"||\\"\\"]}{stream.season::>0[\\"{stream.season} \\"||\\"\\"]}{stream.episode::>=0[\\" E\\"||\\"\\"]}{stream.episode::<=9[\\"0\\"||\\"\\"]}{stream.episode::>0[\\"{stream.episode} \\"||\\"\\"]}\\n{stream.visualTags::exists[\\"🖥️ {stream.visualTags::join(' | ')} \\"||\\"\\"]}{stream.encode::exists[\\" 📺 {stream.encode} \\"||\\"\\"]}\\n{stream.audioTags::exists[\\"🎧 {stream.audioTags::join(' | ')} \\"||\\"\\"]}{stream.audioChannels::exists[\\" 🔊 {stream.audioChannels::join(' | ')}\\"||\\"\\"]}\\n{stream.quality::exists[\\"🎥 {stream.quality} \\"||\\"\\"]} {stream.size::>0[\\"📦 {stream.size::bytes} \\"||\\"\\"]}{stream.folderSize::>0[\\"/ {stream.folderSize::bytes} \\"||\\"\\"]} \\n{stream.releaseGroup::exists[\\"🏷️ {stream.releaseGroup} \\"||\\"\\"]}{stream.indexer::exists[\\" 📡 {stream.indexer}\\"||\\"\\"]}\\n{stream.message::exists[\\"ℹ️ {stream.message}\\"||\\"\\"]}\\n{stream.languages::exists[\\"🗣️ {stream.languages::join(' | ')}\\"||\\"\\"]}"
    }
  },
  "preferredQualities": [
    "BluRay REMUX",
    "BluRay",
    "WEB-DL",
    "WEBRip",
    "HDRip",
    "HC HD-Rip",
    "DVDRip",
    "HDTV",
    "CAM",
    "TS",
    "TC",
    "SCR",
    "Unknown"
  ],
  "preferredResolutions": [
    "2160p",
    "1440p",
    "1080p",
    "720p",
    "576p",
    "480p",
    "360p",
    "240p",
    "144p",
    "Unknown"
  ],
  "excludedQualities": [],
  "excludedVisualTags": [
    "3D"
  ],
  "sortCriteria": {
    "global": [
      {
        "key": "cached",
        "direction": "desc"
      }
    ],
    "movies": [],
    "cached": [
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncached": [
      {
        "key": "streamType",
        "direction": "desc"
      },
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "addon",
        "direction": "desc"
      },
      {
        "key": "seeders",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncachedMovies": [],
    "uncachedSeries": []
  },
  "deduplicator": {
    "enabled": true,
    "keys": [
      "filename",
      "infoHash"
    ],
    "multiGroupBehaviour": "aggressive",
    "cached": "single_result",
    "uncached": "per_service",
    "p2p": "single_result"
  },
  "proxy": {
    "id": "mediaflow",
    "proxiedServices": [],
    "proxiedAddons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "enabled": false,
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "excludeUncachedFromAddons": [],
  "excludeUncachedFromServices": [],
  "excludeUncachedFromStreamTypes": [],
  "excludeCachedFromAddons": [],
  "excludeCachedFromServices": [],
  "excludeCachedFromStreamTypes": [],
  "preferredEncodes": [
    "AV1",
    "HEVC",
    "AVC",
    "XviD",
    "DivX",
    "Unknown"
  ],
  "preferredStreamTypes": [
    "usenet",
    "debrid",
    "http"
  ],
  "preferredVisualTags": [
    "HDR10+",
    "HDR10",
    "HDR",
    "IMAX",
    "10bit",
    "DV",
    "SDR"
  ],
  "preferredAudioTags": [
    "Atmos",
    "TrueHD",
    "DTS-HD MA",
    "DTS-HD",
    "DTS-ES",
    "DD+",
    "DTS",
    "DD",
    "FLAC",
    "OPUS",
    "AAC",
    "Unknown"
  ],
  "catalogModifications": [
    {
      "id": "d11e3b0.debridio_tmdb.movie_trending",
      "name": "(Debridio TMDB) - Trending Movies",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "movie"
    },
    {
      "id": "d11e3b0.debridio_tmdb.movie_popular",
      "name": "(Debridio TMDB) - Popular Movies",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "movie"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.tv_trending",
      "name": "(Debridio TVDB) - Trending Series",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.search_movie",
      "name": "(Debridio TMDB) - Search",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "movie"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.search_series",
      "name": "(Debridio TVDB) - Search",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.search_collections",
      "name": "(Debridio TMDB) - Collection Search",
      "type": "collections",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "collections"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.movie_trending",
      "name": "(Debridio TVDB) - Trending Movies",
      "type": "movie",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "movie"
    },
    {
      "id": "f8fe3b0.debridio_tvdb.search_movie",
      "name": "(Debridio TVDB) - Search",
      "type": "movie",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TVDB",
      "overrideType": "movie"
    },
    {
      "id": "d11e3b0.debridio_tmdb.search_series",
      "name": "(Debridio TMDB) - Search",
      "type": "series",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.tv_popular",
      "name": "(Debridio TMDB) - Popular Series",
      "type": "series",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "series"
    },
    {
      "id": "d11e3b0.debridio_tmdb.tv_trending",
      "name": "(Debridio TMDB) - Trending Series",
      "type": "series",
      "enabled": false,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TMDB",
      "overrideType": "series"
    },
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.mbi",
      "name": "Mubi",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dpe",
      "name": "Discovery+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "9dce3b0.au",
      "name": "Australia TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.br",
      "name": "Brasil TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.ca",
      "name": "Canada TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.cl",
      "name": "Chile TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.es",
      "name": "Spain TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.events",
      "name": "Live Events TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.fr",
      "name": "France TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.it",
      "name": "Italy TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.in",
      "name": "India TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.mx",
      "name": "Mexico TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.nz",
      "name": "New Zealand TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.uk",
      "name": "United Kingdom TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.usa_locals",
      "name": "United States Locals TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.usa",
      "name": "United States TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.za",
      "name": "South Africa TV",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Debridio TV"
    },
    {
      "id": "9dce3b0.search",
      "name": "Debridio TV - Search",
      "type": "tv",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": false,
      "searchable": false,
      "addonName": "Debridio TV"
    }
  ],
  "groups": {
    "enabled": false
  },
  "dynamicAddonFetching": {
    "enabled": false
  },
  "requiredResolutions": [],
  "excludedResolutions": [],
  "includedResolutions": [],
  "requiredQualities": [],
  "includedQualities": [],
  "requiredEncodes": [],
  "excludedEncodes": [],
  "includedEncodes": [],
  "requiredStreamTypes": [],
  "excludedStreamTypes": [],
  "includedStreamTypes": [],
  "requiredVisualTags": [],
  "includedVisualTags": [],
  "requiredAudioTags": [],
  "excludedAudioTags": [],
  "includedAudioTags": [],
  "requiredAudioChannels": [],
  "excludedAudioChannels": [],
  "includedAudioChannels": [],
  "preferredAudioChannels": [],
  "requiredLanguages": [],
  "excludedLanguages": [],
  "includedLanguages": [],
  "preferredLanguages": [],
  "seederRangeTypes": [],
  "titleMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true
  },
  "yearMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true,
    "tolerance": 5
  },
  "seasonEpisodeMatching": {
    "requestTypes": [],
    "addons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "tmdbAccessToken": "${inputTMDBReadAccessToken}"
}`;
        const contentWithoutDebridioDV =
`{
  "services": [
    {
      "id": "realdebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "alldebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "premiumize",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debridlink",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "torbox",
      "enabled": true,
      "credentials": {
        "apiKey": "${inputDebrid}"
      }
    },
    {
      "id": "offcloud",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "putio",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easynews",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easydebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debrider",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "pikpak",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "seedr",
      "enabled": false,
      "credentials": {}
    }
  ],
  "presets": [
    {
      "type": "streaming-catalogs",
      "instanceId": "dfc",
      "enabled": true,
      "options": {
        "name": "Streaming Catalogs",
        "timeout": 15000,
        "resources": [
          "catalog"
        ],
        "catalogs": [
          "nfx",
          "hbm",
          "dnp",
          "amp",
          "atp",
          "sst",
          "pmp",
          "pcp",
          "hlu",
          "stz",
          "mbi",
          "dpe"
        ]
      }
    },
    {
      "type": "newznab",
      "instanceId": "c88",
      "enabled": true,
      "options": {
        "name": "Newznab",
        "newznabUrl": "https://search-api.torbox.app/newznab",
        "apiKey": "${inputDebrid}",
        "apiPath": "/api",
        "timeout": 15000,
        "mediaTypes": [],
        "forceQuerySearch": true
      }
    },
    {
      "type": "torrentio",
      "instanceId": "e1b",
      "enabled": true,
      "options": {
        "name": "Torrentio",
        "timeout": 15000,
        "resources": [
          "stream",
          "catalog",
          "meta"
        ],
        "providers": [],
        "useMultipleInstances": false
      }
    },
    {
      "type": "stremthruTorz",
      "instanceId": "1ec",
      "enabled": true,
      "options": {
        "name": "StremThru Torz",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "mediaTypes": [],
        "includeP2P": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "comet",
      "instanceId": "e3a",
      "enabled": true,
      "options": {
        "name": "Comet",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "includeP2P": false,
        "removeTrash": true,
        "mediaTypes": []
      }
    },
    {
      "type": "torbox-search",
      "instanceId": "5fe",
      "enabled": true,
      "options": {
        "name": "TorBox Search",
        "timeout": 15000,
        "sources": [
          "torrent",
          "usenet"
        ],
        "mediaTypes": [],
        "userSearchEngines": false,
        "onlyShowUserSearchResults": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "opensubtitles-v3-plus",
      "instanceId": "42c",
      "enabled": true,
      "options": {
        "name": "OpenSubtitles V3+",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "language": [
          "en"
        ],
        "sources": "all",
        "includeAiTranslated": true,
        "movieHashPlusAutoAdjustment": true
      }
    },
    {
      "type": "subhero",
      "instanceId": "e84",
      "enabled": true,
      "options": {
        "name": "SubHero",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "en"
        ]
      }
    },
    {
      "type": "aiosubtitle",
      "instanceId": "2db",
      "enabled": true,
      "options": {
        "name": "AIOSubtitle",
        "timeout": 10000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "english"
        ],
        "microsoftTranslatorRegion": "global"
      }
    }
  ],
  "formatter": {
    "id": "custom",
    "definition": {
      "name": "{stream.resolution::=2160p[\\"🚀4K⁠⁠⁠ ⁠\\"||\\"\\"]}{stream.resolution::=1440p[\\"🚀 1440P⁠⁠ \\"||\\"\\"]}{stream.resolution::=1080p[\\"🔥 1080P \\"||\\"\\"]}{stream.resolution::=720p[\\"💿 720P \\"||\\"\\"]}{stream.resolution::=576p[\\"📼 576P \\"||\\"\\"]}{stream.resolution::=480p[\\"📼 480P \\"||\\"\\"]}{stream.resolution::exists[\\"\\"||\\"❔ Unknown Resolution\\"]}\\n{stream.quality::~REMUX[\\"📀 Remux \\"||\\"\\"]}{stream.quality::=BluRay[\\"💿 BluRay \\"||\\"\\"]}{stream.quality::~DL[\\"🌐 WEBDL \\"||\\"\\"]}{stream.quality::=WEBRIP[\\"🖥 WEBRip ⁠\\"||\\"\\"]}{stream.quality::=HDRIP[\\"💾 HDRip ⁠\\"||\\"\\"]}{stream.quality::~HC[\\"💾 HC \\"||\\"\\"]}{stream.quality::=DVDRip[\\"💾 DVDRip \\"||\\"\\"]}{stream.quality::=HDTV[\\"💾 HDTV \\"||\\"\\"]}{stream.quality::=TS[\\"💾 TS \\"||\\"\\"]}{stream.quality::=TC[\\"💾 TC \\"||\\"\\"]}\\n{stream.regexMatched::exists::and::stream.regexMatched::~Bad[\\"🔴 {stream.regexMatched} \\"||\\"\\"]}{stream.regexMatched::~Remux T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Remux T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Remux T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Bluray T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Bluray T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Bluray T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T4[\\"🟡 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T5[\\"🟡 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T6[\\"🟠 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T7[\\"🟠 Tier 7 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T8[\\"🔴 Tier 8 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T1[\\"🟡 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T2[\\"🟠 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T4[\\"🔴 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T5[\\"🔴 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T6[\\"🔴 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Web T1[\\"🟠 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Web T2[\\"🔴 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}\\n{stream.filename::~extended[\\"🎬 Extended \\"||\\"\\"]}{stream.filename::~director[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~dc[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~theatrical[\\"🎭 Theatrical Cut \\"||\\"\\"]}{stream.filename::~assembly[\\"📼 Assembly Cut \\"||\\"\\"]}{stream.filename::~producers[\\"🏟️ Producer’s Cut \\"||\\"\\"]}{stream.filename::~ultimate[\\"💎 Ultimate Cut \\"||\\"\\"]}{stream.filename::~alternate[\\"🔀 Alternative Cut \\"||\\"\\"]}{stream.filename::~redux[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~rdx[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~complete[\\"📦 Complete Cut \\"||\\"\\"]}{stream.filename::~special[\\"🎁 Special Edition \\"||\\"\\"]}{stream.filename::~anniversary[\\"🎉 Anniversary Edition \\"||\\"\\"]}{stream.filename::~imax[\\"🏟️ IMAX Edition \\"||\\"\\"]}{stream.filename::~remastered[\\"✨ Remastered \\"||\\"\\"]}{stream.filename::~restored[\\"📜 Restored Cut \\"||\\"\\"]}{stream.filename::~collectors[\\"🎖️ Collector’s Edition \\"||\\"\\"]}{stream.filename::~unrated[\\"🚫 Unrated \\"||\\"\\"]}{stream.filename::~uncensored[\\"🔞 Uncensored \\"||\\"\\"]}{stream.filename::~workprint[\\"🧪 Workprint \\"||\\"\\"]}{stream.filename::~preview[\\"👀 Preview Cut \\"||\\"\\"]}{stream.filename::~festival[\\"🏆 Festival Cut \\"||\\"\\"]}{stream.filename::~tv[\\"📺 TV Cut \\"||\\"\\"]}{stream.filename::~international[\\"🌍 International Cut \\"||\\"\\"]}{stream.filename::~us[\\"🇺🇸 U.S. Cut \\"||\\"\\"]}{stream.filename::~european[\\"🇪🇺 European Cut \\"||\\"\\"]}{stream.filename::~japanese[\\"🇯🇵 Japanese Cut \\"||\\"\\"]}\\n{stream.type::~p2p[\\"🔗 P2P 🌱 {stream.seeders}\\"||\\"\\"]}",
      "description": "--------------------------------\\n{service.cached::istrue[\\"⚡Ready \\"||\\"\\"]}{service.cached::isfalse[\\"❌ Not Ready \\"||\\"\\"]}{service.id::exists[\\"({service.shortName}) \\"||\\"\\"]}\\n{stream.type::=Usenet[\\"📰 Usenet \\"||\\"\\"]}{stream.type::=p2p[\\"⚠️ P2P \\"||\\"\\"]}{stream.type::=http[\\"💻 Web Link \\"||\\"\\"]}{stream.type::=youtube[\\"▶️ Youtube \\"||\\"\\"]}{stream.type::=live[\\"📺 Live \\"||\\"\\"]} 🔍 {addon.name}  {service.cached::isfalse::and::stream.type::=debrid::and::stream.seeders::>=0[\\"👥 {stream.seeders} \\"||\\"\\"]}\\n--------------------------------\\n{stream.title::exists[\\"🎬 {stream.title::title} \\"||\\"\\"]}{stream.year::exists[\\"({stream.year}) \\"||\\"\\"]}{stream.season::>=0[\\"• S\\"||\\"\\"]}{stream.season::<=9[\\"0\\"||\\"\\"]}{stream.season::>0[\\"{stream.season} \\"||\\"\\"]}{stream.episode::>=0[\\" E\\"||\\"\\"]}{stream.episode::<=9[\\"0\\"||\\"\\"]}{stream.episode::>0[\\"{stream.episode} \\"||\\"\\"]}\\n{stream.visualTags::exists[\\"🖥️ {stream.visualTags::join(' | ')} \\"||\\"\\"]}{stream.encode::exists[\\" 📺 {stream.encode} \\"||\\"\\"]}\\n{stream.audioTags::exists[\\"🎧 {stream.audioTags::join(' | ')} \\"||\\"\\"]}{stream.audioChannels::exists[\\" 🔊 {stream.audioChannels::join(' | ')}\\"||\\"\\"]}\\n{stream.quality::exists[\\"🎥 {stream.quality} \\"||\\"\\"]} {stream.size::>0[\\"📦 {stream.size::bytes} \\"||\\"\\"]}{stream.folderSize::>0[\\"/ {stream.folderSize::bytes} \\"||\\"\\"]} \\n{stream.releaseGroup::exists[\\"🏷️ {stream.releaseGroup} \\"||\\"\\"]}{stream.indexer::exists[\\" 📡 {stream.indexer}\\"||\\"\\"]}\\n{stream.message::exists[\\"ℹ️ {stream.message}\\"||\\"\\"]}\\n{stream.languages::exists[\\"🗣️ {stream.languages::join(' | ')}\\"||\\"\\"]}"
    }
  },
  "preferredQualities": [
    "BluRay REMUX",
    "BluRay",
    "WEB-DL",
    "WEBRip",
    "HDRip",
    "HC HD-Rip",
    "DVDRip",
    "HDTV",
    "CAM",
    "TS",
    "TC",
    "SCR",
    "Unknown"
  ],
  "preferredResolutions": [
    "2160p",
    "1440p",
    "1080p",
    "720p",
    "576p",
    "480p",
    "360p",
    "240p",
    "144p",
    "Unknown"
  ],
  "excludedQualities": [],
  "excludedVisualTags": [
    "3D"
  ],
  "sortCriteria": {
    "global": [
      {
        "key": "cached",
        "direction": "desc"
      }
    ],
    "movies": [],
    "cached": [
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncached": [
      {
        "key": "streamType",
        "direction": "desc"
      },
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "addon",
        "direction": "desc"
      },
      {
        "key": "seeders",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncachedMovies": [],
    "uncachedSeries": []
  },
  "deduplicator": {
    "enabled": true,
    "keys": [
      "filename",
      "infoHash"
    ],
    "multiGroupBehaviour": "aggressive",
    "cached": "single_result",
    "uncached": "per_service",
    "p2p": "single_result"
  },
  "proxy": {
    "id": "mediaflow",
    "proxiedServices": [],
    "proxiedAddons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "enabled": false,
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "excludeUncachedFromAddons": [],
  "excludeUncachedFromServices": [],
  "excludeUncachedFromStreamTypes": [],
  "excludeCachedFromAddons": [],
  "excludeCachedFromServices": [],
  "excludeCachedFromStreamTypes": [],
  "preferredEncodes": [
    "AV1",
    "HEVC",
    "AVC",
    "XviD",
    "DivX",
    "Unknown"
  ],
  "preferredStreamTypes": [
    "usenet",
    "debrid",
    "http"
  ],
  "preferredVisualTags": [
    "DV",
    "HDR10",
    "HDR",
    "HDR10+",
    "IMAX",
    "10bit",
    "SDR"
  ],
  "preferredAudioTags": [
    "Atmos",
    "TrueHD",
    "DTS-HD MA",
    "DTS-HD",
    "DTS-ES",
    "DD+",
    "DTS",
    "DD",
    "FLAC",
    "OPUS",
    "AAC",
    "Unknown"
  ],
  "catalogModifications": [
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.mbi",
      "name": "Mubi",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dpe",
      "name": "Discovery+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    }
  ],
  "groups": {
    "enabled": false
  },
  "dynamicAddonFetching": {
    "enabled": false
  },
  "requiredResolutions": [],
  "excludedResolutions": [],
  "includedResolutions": [],
  "requiredQualities": [],
  "includedQualities": [],
  "requiredEncodes": [],
  "excludedEncodes": [],
  "includedEncodes": [],
  "requiredStreamTypes": [],
  "excludedStreamTypes": [],
  "includedStreamTypes": [],
  "requiredVisualTags": [],
  "includedVisualTags": [],
  "requiredAudioTags": [],
  "excludedAudioTags": [],
  "includedAudioTags": [],
  "requiredAudioChannels": [],
  "excludedAudioChannels": [],
  "includedAudioChannels": [],
  "preferredAudioChannels": [],
  "requiredLanguages": [],
  "excludedLanguages": [],
  "includedLanguages": [],
  "preferredLanguages": [],
  "seederRangeTypes": [],
  "titleMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true
  },
  "yearMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true,
    "tolerance": 5
  },
  "seasonEpisodeMatching": {
    "requestTypes": [],
    "addons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "tmdbAccessToken": "${inputTMDBReadAccessToken}",
  "cacheAndPlay": {
    "streamTypes": [
      "usenet"
    ]
  }
}`;

        const contentWithoutDebridioHDR10Plus =
            `{
  "services": [
    {
      "id": "realdebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "alldebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "premiumize",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debridlink",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "torbox",
      "enabled": true,
      "credentials": {
        "apiKey": "${inputDebrid}"
      }
    },
    {
      "id": "offcloud",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "putio",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easynews",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "easydebrid",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "debrider",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "pikpak",
      "enabled": false,
      "credentials": {}
    },
    {
      "id": "seedr",
      "enabled": false,
      "credentials": {}
    }
  ],
  "presets": [
    {
      "type": "streaming-catalogs",
      "instanceId": "dfc",
      "enabled": true,
      "options": {
        "name": "Streaming Catalogs",
        "timeout": 15000,
        "resources": [
          "catalog"
        ],
        "catalogs": [
          "nfx",
          "hbm",
          "dnp",
          "amp",
          "atp",
          "sst",
          "pmp",
          "pcp",
          "hlu",
          "stz",
          "mbi",
          "dpe"
        ]
      }
    },
    {
      "type": "newznab",
      "instanceId": "c88",
      "enabled": true,
      "options": {
        "name": "Newznab",
        "newznabUrl": "https://search-api.torbox.app/newznab",
        "apiKey": "${inputDebrid}",
        "apiPath": "/api",
        "timeout": 15000,
        "mediaTypes": [],
        "forceQuerySearch": true
      }
    },
    {
      "type": "torrentio",
      "instanceId": "e1b",
      "enabled": true,
      "options": {
        "name": "Torrentio",
        "timeout": 15000,
        "resources": [
          "stream",
          "catalog",
          "meta"
        ],
        "providers": [],
        "useMultipleInstances": false
      }
    },
    {
      "type": "stremthruTorz",
      "instanceId": "1ec",
      "enabled": true,
      "options": {
        "name": "StremThru Torz",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "mediaTypes": [],
        "includeP2P": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "comet",
      "instanceId": "e3a",
      "enabled": true,
      "options": {
        "name": "Comet",
        "timeout": 15000,
        "resources": [
          "stream"
        ],
        "includeP2P": false,
        "removeTrash": true,
        "mediaTypes": []
      }
    },
    {
      "type": "torbox-search",
      "instanceId": "5fe",
      "enabled": true,
      "options": {
        "name": "TorBox Search",
        "timeout": 15000,
        "sources": [
          "torrent",
          "usenet"
        ],
        "mediaTypes": [],
        "userSearchEngines": false,
        "onlyShowUserSearchResults": false,
        "useMultipleInstances": false
      }
    },
    {
      "type": "opensubtitles-v3-plus",
      "instanceId": "42c",
      "enabled": true,
      "options": {
        "name": "OpenSubtitles V3+",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "language": [
          "en"
        ],
        "sources": "all",
        "includeAiTranslated": true,
        "movieHashPlusAutoAdjustment": true
      }
    },
    {
      "type": "subhero",
      "instanceId": "e84",
      "enabled": true,
      "options": {
        "name": "SubHero",
        "timeout": 15000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "en"
        ]
      }
    },
    {
      "type": "aiosubtitle",
      "instanceId": "2db",
      "enabled": true,
      "options": {
        "name": "AIOSubtitle",
        "timeout": 10000,
        "resources": [
          "subtitles"
        ],
        "languages": [
          "english"
        ],
        "microsoftTranslatorRegion": "global"
      }
    }
  ],
  "formatter": {
    "id": "custom",
    "definition": {
      "name": "{stream.resolution::=2160p[\\"🚀4K⁠⁠⁠ ⁠\\"||\\"\\"]}{stream.resolution::=1440p[\\"🚀 1440P⁠⁠ \\"||\\"\\"]}{stream.resolution::=1080p[\\"🔥 1080P \\"||\\"\\"]}{stream.resolution::=720p[\\"💿 720P \\"||\\"\\"]}{stream.resolution::=576p[\\"📼 576P \\"||\\"\\"]}{stream.resolution::=480p[\\"📼 480P \\"||\\"\\"]}{stream.resolution::exists[\\"\\"||\\"❔ Unknown Resolution\\"]}\\n{stream.quality::~REMUX[\\"📀 Remux \\"||\\"\\"]}{stream.quality::=BluRay[\\"💿 BluRay \\"||\\"\\"]}{stream.quality::~DL[\\"🌐 WEBDL \\"||\\"\\"]}{stream.quality::=WEBRIP[\\"🖥 WEBRip ⁠\\"||\\"\\"]}{stream.quality::=HDRIP[\\"💾 HDRip ⁠\\"||\\"\\"]}{stream.quality::~HC[\\"💾 HC \\"||\\"\\"]}{stream.quality::=DVDRip[\\"💾 DVDRip \\"||\\"\\"]}{stream.quality::=HDTV[\\"💾 HDTV \\"||\\"\\"]}{stream.quality::=TS[\\"💾 TS \\"||\\"\\"]}{stream.quality::=TC[\\"💾 TC \\"||\\"\\"]}\\n{stream.regexMatched::exists::and::stream.regexMatched::~Bad[\\"🔴 {stream.regexMatched} \\"||\\"\\"]}{stream.regexMatched::~Remux T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Remux T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Remux T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Bluray T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Bluray T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Bluray T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T1[\\"🟢 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T2[\\"🟢 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T3[\\"🟢 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T4[\\"🟡 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T5[\\"🟡 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T6[\\"🟠 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T7[\\"🟠 Tier 7 \\"||\\"\\"]}{stream.regexMatched::~Anime BD T8[\\"🔴 Tier 8 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T1[\\"🟡 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T2[\\"🟠 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T4[\\"🔴 Tier 4 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T5[\\"🔴 Tier 5 \\"||\\"\\"]}{stream.regexMatched::~Anime Web T6[\\"🔴 Tier 6 \\"||\\"\\"]}{stream.regexMatched::~Web T1[\\"🟠 Tier 1 \\"||\\"\\"]}{stream.regexMatched::~Web T2[\\"🔴 Tier 2 \\"||\\"\\"]}{stream.regexMatched::~Web T3[\\"🔴 Tier 3 \\"||\\"\\"]}\\n{stream.filename::~extended[\\"🎬 Extended \\"||\\"\\"]}{stream.filename::~director[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~dc[\\"🎬 Director's Cut \\"||\\"\\"]}{stream.filename::~theatrical[\\"🎭 Theatrical Cut \\"||\\"\\"]}{stream.filename::~assembly[\\"📼 Assembly Cut \\"||\\"\\"]}{stream.filename::~producers[\\"🏟️ Producer’s Cut \\"||\\"\\"]}{stream.filename::~ultimate[\\"💎 Ultimate Cut \\"||\\"\\"]}{stream.filename::~alternate[\\"🔀 Alternative Cut \\"||\\"\\"]}{stream.filename::~redux[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~rdx[\\"🔄 Redux \\"||\\"\\"]}{stream.filename::~complete[\\"📦 Complete Cut \\"||\\"\\"]}{stream.filename::~special[\\"🎁 Special Edition \\"||\\"\\"]}{stream.filename::~anniversary[\\"🎉 Anniversary Edition \\"||\\"\\"]}{stream.filename::~imax[\\"🏟️ IMAX Edition \\"||\\"\\"]}{stream.filename::~remastered[\\"✨ Remastered \\"||\\"\\"]}{stream.filename::~restored[\\"📜 Restored Cut \\"||\\"\\"]}{stream.filename::~collectors[\\"🎖️ Collector’s Edition \\"||\\"\\"]}{stream.filename::~unrated[\\"🚫 Unrated \\"||\\"\\"]}{stream.filename::~uncensored[\\"🔞 Uncensored \\"||\\"\\"]}{stream.filename::~workprint[\\"🧪 Workprint \\"||\\"\\"]}{stream.filename::~preview[\\"👀 Preview Cut \\"||\\"\\"]}{stream.filename::~festival[\\"🏆 Festival Cut \\"||\\"\\"]}{stream.filename::~tv[\\"📺 TV Cut \\"||\\"\\"]}{stream.filename::~international[\\"🌍 International Cut \\"||\\"\\"]}{stream.filename::~us[\\"🇺🇸 U.S. Cut \\"||\\"\\"]}{stream.filename::~european[\\"🇪🇺 European Cut \\"||\\"\\"]}{stream.filename::~japanese[\\"🇯🇵 Japanese Cut \\"||\\"\\"]}\\n{stream.type::~p2p[\\"🔗 P2P 🌱 {stream.seeders}\\"||\\"\\"]}",
      "description": "--------------------------------\\n{service.cached::istrue[\\"⚡Ready \\"||\\"\\"]}{service.cached::isfalse[\\"❌ Not Ready \\"||\\"\\"]}{service.id::exists[\\"({service.shortName}) \\"||\\"\\"]}\\n{stream.type::=Usenet[\\"📰 Usenet \\"||\\"\\"]}{stream.type::=p2p[\\"⚠️ P2P \\"||\\"\\"]}{stream.type::=http[\\"💻 Web Link \\"||\\"\\"]}{stream.type::=youtube[\\"▶️ Youtube \\"||\\"\\"]}{stream.type::=live[\\"📺 Live \\"||\\"\\"]} 🔍 {addon.name}  {service.cached::isfalse::and::stream.type::=debrid::and::stream.seeders::>=0[\\"👥 {stream.seeders} \\"||\\"\\"]}\\n--------------------------------\\n{stream.title::exists[\\"🎬 {stream.title::title} \\"||\\"\\"]}{stream.year::exists[\\"({stream.year}) \\"||\\"\\"]}{stream.season::>=0[\\"• S\\"||\\"\\"]}{stream.season::<=9[\\"0\\"||\\"\\"]}{stream.season::>0[\\"{stream.season} \\"||\\"\\"]}{stream.episode::>=0[\\" E\\"||\\"\\"]}{stream.episode::<=9[\\"0\\"||\\"\\"]}{stream.episode::>0[\\"{stream.episode} \\"||\\"\\"]}\\n{stream.visualTags::exists[\\"🖥️ {stream.visualTags::join(' | ')} \\"||\\"\\"]}{stream.encode::exists[\\" 📺 {stream.encode} \\"||\\"\\"]}\\n{stream.audioTags::exists[\\"🎧 {stream.audioTags::join(' | ')} \\"||\\"\\"]}{stream.audioChannels::exists[\\" 🔊 {stream.audioChannels::join(' | ')}\\"||\\"\\"]}\\n{stream.quality::exists[\\"🎥 {stream.quality} \\"||\\"\\"]} {stream.size::>0[\\"📦 {stream.size::bytes} \\"||\\"\\"]}{stream.folderSize::>0[\\"/ {stream.folderSize::bytes} \\"||\\"\\"]} \\n{stream.releaseGroup::exists[\\"🏷️ {stream.releaseGroup} \\"||\\"\\"]}{stream.indexer::exists[\\" 📡 {stream.indexer}\\"||\\"\\"]}\\n{stream.message::exists[\\"ℹ️ {stream.message}\\"||\\"\\"]}\\n{stream.languages::exists[\\"🗣️ {stream.languages::join(' | ')}\\"||\\"\\"]}"
    }
  },
  "preferredQualities": [
    "BluRay REMUX",
    "BluRay",
    "WEB-DL",
    "WEBRip",
    "HDRip",
    "HC HD-Rip",
    "DVDRip",
    "HDTV",
    "CAM",
    "TS",
    "TC",
    "SCR",
    "Unknown"
  ],
  "preferredResolutions": [
    "2160p",
    "1440p",
    "1080p",
    "720p",
    "576p",
    "480p",
    "360p",
    "240p",
    "144p",
    "Unknown"
  ],
  "excludedQualities": [],
  "excludedVisualTags": [
    "3D"
  ],
  "sortCriteria": {
    "global": [
      {
        "key": "cached",
        "direction": "desc"
      }
    ],
    "movies": [],
    "cached": [
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncached": [
      {
        "key": "streamType",
        "direction": "desc"
      },
      {
        "key": "resolution",
        "direction": "desc"
      },
      {
        "key": "quality",
        "direction": "desc"
      },
      {
        "key": "addon",
        "direction": "desc"
      },
      {
        "key": "seeders",
        "direction": "desc"
      },
      {
        "key": "visualTag",
        "direction": "desc"
      },
      {
        "key": "audioTag",
        "direction": "desc"
      },
      {
        "key": "encode",
        "direction": "desc"
      },
      {
        "key": "size",
        "direction": "desc"
      }
    ],
    "uncachedMovies": [],
    "uncachedSeries": []
  },
  "deduplicator": {
    "enabled": true,
    "keys": [
      "filename",
      "infoHash"
    ],
    "multiGroupBehaviour": "aggressive",
    "cached": "single_result",
    "uncached": "per_service",
    "p2p": "single_result"
  },
  "proxy": {
    "id": "mediaflow",
    "proxiedServices": [],
    "proxiedAddons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "enabled": false,
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "excludeUncachedFromAddons": [],
  "excludeUncachedFromServices": [],
  "excludeUncachedFromStreamTypes": [],
  "excludeCachedFromAddons": [],
  "excludeCachedFromServices": [],
  "excludeCachedFromStreamTypes": [],
  "preferredEncodes": [
    "AV1",
    "HEVC",
    "AVC",
    "XviD",
    "DivX",
    "Unknown"
  ],
  "preferredStreamTypes": [
    "usenet",
    "debrid",
    "http"
  ],
  "preferredVisualTags": [
    "HDR10+",
    "HDR10",
    "HDR",
    "IMAX",
    "10bit",
    "DV",
    "SDR"
  ],
  "preferredAudioTags": [
    "Atmos",
    "TrueHD",
    "DTS-HD MA",
    "DTS-HD",
    "DTS-ES",
    "DD+",
    "DTS",
    "DD",
    "FLAC",
    "OPUS",
    "AAC",
    "Unknown"
  ],
  "catalogModifications": [
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.nfx",
      "name": "Netflix",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.sst",
      "name": "SkyShowtime",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hbm",
      "name": "HBO Max",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dnp",
      "name": "Disney+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.atp",
      "name": "Apple TV+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.stz",
      "name": "Starz",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.amp",
      "name": "Prime Video",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.hlu",
      "name": "Hulu",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pmp",
      "name": "Paramount+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.pcp",
      "name": "Peacock",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.mbi",
      "name": "Mubi",
      "type": "movie",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    },
    {
      "id": "dfce3b0.dpe",
      "name": "Discovery+",
      "type": "series",
      "enabled": true,
      "shuffle": false,
      "rpdb": false,
      "hideable": true,
      "searchable": false,
      "addonName": "Streaming Catalogs"
    }
  ],
  "groups": {
    "enabled": false
  },
  "dynamicAddonFetching": {
    "enabled": false
  },
  "requiredResolutions": [],
  "excludedResolutions": [],
  "includedResolutions": [],
  "requiredQualities": [],
  "includedQualities": [],
  "requiredEncodes": [],
  "excludedEncodes": [],
  "includedEncodes": [],
  "requiredStreamTypes": [],
  "excludedStreamTypes": [],
  "includedStreamTypes": [],
  "requiredVisualTags": [],
  "includedVisualTags": [],
  "requiredAudioTags": [],
  "excludedAudioTags": [],
  "includedAudioTags": [],
  "requiredAudioChannels": [],
  "excludedAudioChannels": [],
  "includedAudioChannels": [],
  "preferredAudioChannels": [],
  "requiredLanguages": [],
  "excludedLanguages": [],
  "includedLanguages": [],
  "preferredLanguages": [],
  "seederRangeTypes": [],
  "titleMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true
  },
  "yearMatching": {
    "requestTypes": [
      "movie",
      "series"
    ],
    "addons": [],
    "enabled": true,
    "tolerance": 5
  },
  "seasonEpisodeMatching": {
    "requestTypes": [],
    "addons": []
  },
  "autoPlay": {
    "attributes": [
      "service",
      "proxied",
      "resolution",
      "quality",
      "encode",
      "audioTags",
      "visualTags",
      "languages",
      "releaseGroup"
    ]
  },
  "statistics": {
    "statsToShow": [
      "addon",
      "filter"
    ]
  },
  "hideErrorsForResources": [],
  "tmdbAccessToken": "${inputTMDBReadAccessToken}",
  "cacheAndPlay": {
    "streamTypes": [
      "usenet"
    ]
  }
}`;

        const content = inputDebridio ?
            (inputIsSamsung ? contentWithDebridioHDR10Plus : contentWithDebridioDV) :
            (inputIsSamsung ? contentWithoutDebridioHDR10Plus : contentWithoutDebridioDV);

        const blob = new Blob([content], { type: "application/json;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "aio-config.json";
        link.click();
    };

    const messages = [
        "The borderline-useless",
        "The referral-farming",
        "The low-effort vibecoded",
        "The human-dumbening",
    ];

    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setIndex((prev) => (prev + 1) % messages.length);
    };

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 180 - 90,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
        },
        visible: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
        exit: {
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360 - 180,
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            transition: { duration: 0.6 },
        },
    };

    return (
        <div className={`app-container ${fadeIn ? "fade-in" : ""}`}>
            <header className="header" onClick={handleClick}>
                <AnimatePresence mode="wait">
                    <motion.h2
                        key={index}
                        className="hateBanner"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 100, damping: 8 }}
                    >
                        {messages[index]}
                    </motion.h2>
                </AnimatePresence>
                <h1>AIO Builder ⚡</h1>
                <p className="description">
                    Loved by some, hated by many!
                </p>
            </header>

            <main className="content">
                <div className="section slide-up torbox">
                    <h2 className="mandatory">TorBox API Key</h2>
                    <input
                        type="text"
                        value={inputDebrid}
                        onChange={(e) => setInputDebrid(e.target.value)}
                        placeholder="Type here..."
                    />
                    <div className="section-details">
                        <p>Sign up <a href="https://torbox.app/login?next=/subscription?referral=5f3d633a-d6ad-44bf-9b31-488b9340b098" target="_blank" rel="noreferrer">here</a>.</p>
                        <div className="tb-referral-message-container">
                            <div className="tb-referral-message-icon">🔥</div>
                            <p className="tb-referral-message">After signing up, <a href="https://torbox.app/subscription?referral=5f3d633a-d6ad-44bf-9b31-488b9340b098" target="_blank" rel="noreferrer">click here</a> to get <span className="highlight">7 days added to your account for free</span> every time you make a purchase!</p>
                        </div>
                    </div>
                </div>

                <div className="section slide-up debridio" style={{ animationDelay: "0.2s" }}>
                    <h2>Debridio API Key</h2>
                    <input
                        type="text"
                        value={inputDebridio}
                        onChange={(e) => setInputDebridio(e.target.value)}
                        placeholder="Type here..."
                    />
                    <div className="section-details">
                        <p>Sign up <a href="https://debridio.com/" target="_blank" rel="noreferrer">here</a>.</p>
                        <p>If you do not wish to include Debridio, leave this field empty.</p>
                    </div>
                </div>

                <div className="section section-dual slide-up tmdb" style={{ animationDelay: "0.4s" }}>
                    <div className="dual-inputs">
                        {/*<p>TMDB API Key</p>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={inputTMDBApiKey}*/}
                        {/*    onChange={(e) => setInputTMDBApiKey(e.target.value)}*/}
                        {/*    placeholder="Type here..."*/}
                        {/*/>*/}
                        <h2 className="dual-inputs__newEntry mandatory">TMDB Read Access Token</h2>
                        <input
                            type="text"
                            value={inputTMDBReadAccessToken}
                            onChange={(e) => setInputTMDBReadAccessToken(e.target.value)}
                            placeholder="Type here..."
                        />
                        <div className="section-details">
                            <p>Sign up <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">here</a> for free.</p>
                            <p>To find your token, go to Settings → API.</p>
                        </div>
                    </div>
                </div>

                <div className="section slide-up tv" style={{ animationDelay: "0.6s" }}>
                    <div className="section-inputs">
                        <h3>I'm planning to watch on a Samsung TV</h3>
                        <div
                            className={`toggle-container ${inputIsSamsung ? "active" : ""}`}
                            onClick={() => setInputIsSamsung(!inputIsSamsung)}
                        >
                            <div className="toggle-circle" />
                        </div>
                    </div>

                    <div className="section-details">
                        <p>This will prioritise the visual tags supported by your TV.</p>
                        <p>Not recommended for any other use case.</p>
                    </div>
                </div>

                <button
                    className="generate-btn slide-up"
                    style={{ animationDelay: "0.8s" }}
                    onClick={handleGenerateFile}
                >
                    Generate AIO Config
                </button>
                <div className="section slide-up info" style={{ animationDelay: "1s" }}>
                    <h2>How To Use</h2>
                    <div className="section-step first">
                        <p>Go to your preferred AIO instance.</p>
                        <p>If you don't have one, you can use <a href="https://aiostreamsfortheweak.nhyira.dev/stremio/configure?menu=save-install" target="_blank" rel="noreferrer">this stable instance</a> which is great.</p>
                    </div>
                    <div className="section-step">
                        <p>Import the generated config file.</p>
                    </div>
                    <div className="section-step">
                        <p>Set a password for your configuration.</p>
                        <p>Optionally (but highly recommended): save the UUID, so you can access and modify your configuration later.</p>
                    </div>
                    <div className="section-step">
                        <p>Install and enjoy!</p>
                    </div>
                </div>
                <div className="footer">👉🏼  Comfortable.Debt - 2025</div>
            </main>
        </div>
    );
}

export default App;