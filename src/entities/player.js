import { pixi } from 'engine_utils';
import { position, renderable } from 'engine_components';

export const create = (uid, loader, resource, stage) => {
    return {
        uid: uid,
        systems: [
            {
                uid: 'keyboard_input'
            },
            {
                uid: 'render'
            }
        ],
        components: [
            {
                uid: 'sprite',
                state: renderable.mk_sprite_state(loader, stage, resource.name)
            },
            {
                uid: 'position',
                state: position.mk_position_state(20, 20, 0, 0, 0)
            }
        ]
    }
};
