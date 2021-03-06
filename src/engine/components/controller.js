const keycode_movement = {
    up: { direction: 'up' },
    down: { direction: 'down' },
    left: { direction: 'left' },
    right: { direction: 'right' },
};

const input_move = input_state => {
    const commands = ['up', 'down', 'left', 'right'];
    const input = commands.filter(key => input_state[key]).map(key => keycode_movement[key]);
    return input.length !== 0? input[0] : {};
};

export const react_to_input = (entity_id, component_state, messages) => {
    const move_action = input_move(messages.systems.key_input);
    return {
        new_component_state: {
            ...component_state,
            move_action: move_action
        },
        events: []
    };
};
