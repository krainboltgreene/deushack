const homepage = ""

export default function initialState () {
  return {
    resources: {
      programs: {
        overload: {
          id: "overload",
          type: "programs",
          attributes: {
            name: "Overload",
            uses: 3,
            icon: "thermometer",
            description: "Slows down all opperations on this node.",
          },
        },
        handshake: {
          id: "handshake",
          type: "programs",
          attributes: {
            name: "Handshake",
            uses: 2,
            icon: "handshake-o",
            description: "Trigger this node's special ability",
          },
        },
      },
      bridges: {
        bridge1: {
          id: "bridge1",
          type: "bridges",
          attributes: {level: 5},
          relationships: {
            from: {
              data: {
                id: "node1",
                type: "nodes",
              },
            },
            to: {
              data: {
                id: "node2",
                type: "nodes",
              },
            },
          },
        },
        bridge2: {
          id: "bridge2",
          type: "bridges",
          attributes: {level: 1},
          relationships: {
            from: {
              data: {
                id: "node2",
                type: "nodes",
              },
            },
            to: {
              data: {
                id: "node3",
                type: "nodes",
              },
            },
          },
        },
      },
      nodes: {
        node1: {
          id: "node1",
          type: "nodes",
          attributes: {
            role: "security",
            icon: "warning",
            level: 4,
          },
        },
        node2: {
          id: "node2",
          type: "nodes",
          attributes: {
            role: "storage",
            icon: "database",
            level: 4,
          },
        },
        node3: {
          id: "node3",
          type: "nodes",
          attributes: {
            role: "home",
            icon: "server",
            level: 1,
          },
        },
      },
    },
    ephemeral: {location: {page: homepage}},
    metadata: {},
  }
}
