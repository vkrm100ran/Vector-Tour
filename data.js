var APP_DATA = {
  "scenes": [
    {
      "id": "0-road-view",
      "name": "Road View",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.9794527994831093,
        "pitch": 0.017935904634171607,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.8146149913939773,
          "pitch": 0.19487879707979872,
          "rotation": 0,
          "target": "1-inside-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-inside-gate",
      "name": "Inside gate",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.988520076217764,
        "pitch": 0.2962745163994853,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.7082205764881158,
          "pitch": 0.36819484805834435,
          "rotation": 0.7853981633974483,
          "target": "8-playground"
        },
        {
          "yaw": -2.6464154527068384,
          "pitch": 0.6109461581550448,
          "rotation": 6.283185307179586,
          "target": "2-front-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-garden",
      "name": "Front Garden",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.975963877909363,
        "pitch": 0.07291638869755346,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.04368807640422823,
          "pitch": 0.3498800195075962,
          "rotation": 0,
          "target": "3-reception"
        },
        {
          "yaw": 0.9624539240022898,
          "pitch": 0.47476493210428217,
          "rotation": 0.7853981633974483,
          "target": "8-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reception",
      "name": "Reception",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.3007488834162899,
        "pitch": 0.0005814933159520308,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.2449695392848028,
          "pitch": 0.2578743698180439,
          "rotation": 13.351768777756625,
          "target": "4-principle-office"
        },
        {
          "yaw": 0.867035082860431,
          "pitch": 0.2522768184196682,
          "rotation": 31.415926535897956,
          "target": "5-corridor"
        },
        {
          "yaw": -2.7669355751791027,
          "pitch": 0.6165276956871999,
          "rotation": 0,
          "target": "2-front-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-principle-office",
      "name": "Principle Office",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0130098977387387,
        "pitch": 0.28518449048696937,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.2268509936315954,
          "pitch": 0.696653077674668,
          "rotation": 0,
          "target": "3-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor",
      "name": "corridor",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.7386019352802116,
        "pitch": 0.2149811836634008,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.3876026736750262,
          "pitch": 0.09490646966834682,
          "rotation": 0.7853981633974483,
          "target": "11-smart-class"
        },
        {
          "yaw": 0.20364702657248657,
          "pitch": 0.10225038949136867,
          "rotation": 12.566370614359176,
          "target": "12-vr-class"
        },
        {
          "yaw": -0.6169561439252078,
          "pitch": 0.12418490669584337,
          "rotation": 31.415926535897956,
          "target": "13-robotics-lab"
        },
        {
          "yaw": -1.7759447490371745,
          "pitch": 0.20488567337033636,
          "rotation": 6.283185307179586,
          "target": "6-library"
        },
        {
          "yaw": -2.461966564500763,
          "pitch": 0.16335832678012707,
          "rotation": 13.351768777756625,
          "target": "10-science-lab"
        },
        {
          "yaw": 2.600424893695579,
          "pitch": 0.13549392825669315,
          "rotation": 6.283185307179586,
          "target": "9-computer"
        },
        {
          "yaw": 0.7706548206083355,
          "pitch": 0.13606117022144026,
          "rotation": 0.7853981633974483,
          "target": "3-reception"
        },
        {
          "yaw": 3.008562545432236,
          "pitch": 0.1328892665424828,
          "rotation": 0,
          "target": "8-playground"
        },
        {
          "yaw": -1.0118715075453526,
          "pitch": 0.18330957845351392,
          "rotation": 12.566370614359176,
          "target": "7-indoor-games-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-library",
      "name": "Library",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.6034383052108367,
        "pitch": 0.17915435940849989,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.43074619327993524,
          "pitch": 0.3273277191809303,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-indoor-games-area",
      "name": "Indoor Games Area",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.547738603925307,
        "pitch": 0.40630219906194576,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.069480002667504,
          "pitch": 0.3902452158996539,
          "rotation": 6.283185307179586,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-playground",
      "name": "Playground",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.1342352358402774,
        "pitch": -0.0007811015684318079,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.028811187886685,
          "pitch": 0.5081958276561682,
          "rotation": 11.780972450961727,
          "target": "3-reception"
        },
        {
          "yaw": -1.5804441751015101,
          "pitch": 0.5765568698760273,
          "rotation": 0.7853981633974483,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-computer",
      "name": "Computer",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.3657764496200837,
        "pitch": 0.12796739957749992,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.1605525375888064,
          "pitch": 0.5003973739987764,
          "rotation": 0.7853981633974483,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-science-lab",
      "name": "Science lab",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.1269864224430997,
        "pitch": 0.13317758241798217,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.020611647055171,
          "pitch": 0.5438658400023009,
          "rotation": 0.7853981633974483,
          "target": "5-corridor"
        },
        {
          "yaw": 1.3714971907373723,
          "pitch": 0.45725601124235205,
          "rotation": 5.497787143782138,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-smart-class",
      "name": "Smart Class",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.616571537220171,
          "pitch": 0.4595485235608514,
          "rotation": 7.0685834705770345,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-vr-class",
      "name": "VR Class",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.740876850612203,
        "pitch": 0.30201107758592904,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.855256841723607,
          "pitch": 0.494711925582104,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-robotics-lab",
      "name": "Robotics lab",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.6772266198549186,
        "pitch": 0.5267122278118421,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.7061458608627955,
          "pitch": 0.4147909282262603,
          "rotation": 0.7853981633974483,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vector Academy Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
