import { pixi } from 'engine_utils';

import { component_state } from './component';
import { entity_state } from './entity';
import { renderer_state } from './renderer';
import { scene_state } from './scene';
import { system_state } from './system';

const mk_text = (stage, str) => {
    const style = pixi.mk_text_style({
        fontFamily: 'Futura',
        fontSize: 64,
        fill: 'white'
    });
    const message = pixi.mk_text(str, style);
    message.x = 200;
    message.y = 200;
    stage.addChild(message);
};

export const mk_stages = () => {
    const start = new pixi.mk_stage();
    const main = new pixi.mk_stage();
    const result = new pixi.mk_stage();
    mk_text(start, 'start');
    mk_text(result, 'result');
    return { start, main, result };
};

export const mk_init_state = (loader, resources, renderer, stages) => ([
    ...component_state(resources, renderer),
    ...system_state,
    ...entity_state(loader, resources, renderer, stages),
    ...renderer_state(renderer, stages),
    ...scene_state(stages),
]);
