var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.16528386569898856,
        "pitch": -0.06106226418853922,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.2163196131901497,
          "pitch": -0.22845326108418362,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6705235748865537,
          "pitch": -0.009649986845570169,
          "title": "Welcome!",
          "text": "Welcome."
        },
        {
          "yaw": -2.8505649646401707,
          "pitch": 0.0997938530409126,
          "title": "UCC",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.047894089819275,
        "pitch": 0.19590809760489591,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.1139629200457275,
          "pitch": 0.08268077113147854,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8753386050780172,
          "pitch": -0.11949018242008336,
          "title": "Spinelli Coffee",
          "text": "It has nice coffee."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.7426554062057349,
        "pitch": -0.1399336257356154,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.05896969380020245,
          "pitch": 0,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.4967085555637887,
          "pitch": 0.09749583542971152,
          "rotation": 10.995574287564278,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
