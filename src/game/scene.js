export const scene_state = stage => ([
    {
        type: 'current_scene',
        opts: {
            uid: 'start'
        }
    },
    {
        type: 'scene',
        opts: {
            uid: 'start',
            stage: stage.start,
            systems: [
                'key_input',
                'render'
            ],
            components: []
        }
    },
    {
        type: 'scene',
        opts: {
            uid: 'main',
            stage: stage.main,
            systems: [
                'key_input',
                'render'
            ],
            components: []
        }
    },
    {
        type: 'scene',
        opts: {
            uid: 'result',
            stage: stage.result,
            systems: [
                'key_input',
                'render'
            ],
            components: []
        }
    }
]);
