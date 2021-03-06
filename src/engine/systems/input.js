import * as keycode from 'keycode';
import { ecs } from 'engine_core';

let key_input = {};
const initialize_key_input = () => Object.keys(keycode.codes).reduce((accum, code) => ({ ...accum, [code]: false }), key_input);

const keydown = e => {
    e.preventDefault();
    const key = keycode.default(e);
    key_input = { ...key_input, [key]: true };
};

const keyup = e => {
    e.preventDefault();
    const key = keycode.default(e);
    key_input = { ...key_input, [key]: false };
};

const init_input = () => {
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);
    key_input = { ...initialize_key_input() };
};

init_input();

export const system = state => ({
    ...state,
    state: {
        ...state.state,
        system: {
            ...state.state.system,
            key_input: key_input
        }
    }
});
