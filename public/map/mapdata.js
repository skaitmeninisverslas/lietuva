var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",

    //State defaults
    state_description: "State description",
    state_color: "#EEEEEE",
    state_hover_color: "#0000BB",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_pulse: "yes",
    location_url: "",
    location_color: "#fff",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 20,
    location_type: "circle",
    // location_image_source: "frog.png",
    location_border_color: "#ddd",
    location_border: 0,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ddd",
    label_hover_color: "#ddd",
    label_size: 16,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    // back_image_url: "/map/map_images/x.png",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
  },
  state_specific: {
    LTU1067: {
      name: "Alytaus",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    LTU1069: {
      name: "Kauno",
    },
    LTU1070: {
      name: "Marijampoles",
    },
    LTU1071: {
      name: "Panevezio",
    },
    LTU1072: {
      name: "Šiauliai",
    },
    LTU1073: {
      name: "Taurages",
    },
    LTU1074: {
      name: "Utenos",
    },
    LTU1075: {
      name: "Vilniaus",
    },
    LTU935: {
      name: "Klaipedos",
    },
    LTU936: {
      name: "Telšiai",
    },
  },
  locations: {
    0: {
      lat: "54.683333",
      lng: "25.316667",
      name: "Vilnius",
      description: "apie vilna",

      // url: "https://vilnius.lt",
      // image_url: "htts",
      // type: "circle",
      color: "white",
      // border_color: "",
    },
    1: {
      lat: "54.5554",
      lng: "23.3626",
      name: "Marijampolė",
    },
    2: {
      lat: "55.9349",
      lng: "23.3137",
      name: "Šiauliai",
      color: "#F8E833",
      border_color: "#FFD400",
      opacity: "1",
      url: "/siauliai",
    },
    3: {
      lat: "55.7348",
      lng: "24.3575",
      name: "Panevėžys",
    },
    4: {
      lat: "54.3963",
      lng: "24.0459",
      name: "Alytus",
    },
    5: {
      lat: "54.8985",
      lng: "23.9036",
      name: "Kaunas",
      // color: "#F8E833",
      // border_color: "#FFD400",
      // opacity: "1",
      // url: "/kaunas",
    },
    6: {
      lat: "55.5000",
      lng: "25.6094",
      name: "Utena",
    },
    7: {
      lat: "55.2504",
      lng: "22.2910",
      name: "Tauragė",
    },
    8: {
      lat: "55.9870",
      lng: "22.2486",
      name: "Telšiai",
    },
    9: {
      lat: "55.7033",
      lng: "21.1443",
      name: "Klaipėda",
      image_url: "http://localhost:3000/assets/klaipeda.svg",
    },
    10: {
      lat: "55.3030",
      lng: "21.0041",
      name: "Nida",
    },
    11: {
      lat: "55.3380",
      lng: "21.0120",
      name: "Juodkrantė",
      display: "state",
    },
  },
  labels: {
    0: {
      name: "Vilnius",
      parent_type: "location",
      parent_id: "0",
      x: 745.9942244418359,
      y: 550.661952,
    },
    1: {
      name: "Marijampolė",
      parent_type: "location",
      parent_id: "1",
      x: 400,
      y: 580,
    },
    2: {
      name: "Šiauliai",
      parent_type: "location",
      parent_id: "2",
      color: "#FFD400",
      hover_color: "#FFD400",
      x: 415,
      y: 170,
    },
    3: {
      name: "Panevėžys",
      parent_type: "location",
      parent_id: "3",
      x: 585,
      y: 235,
    },
  },
  // legend: {
  //   entries: [
  //     {
  //       name: "Offices",
  //       color: "red",
  //       type: "location",
  //       shape: "triangle",
  //     },
  //   ],
  // },
};
