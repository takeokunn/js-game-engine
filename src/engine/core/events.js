import * as ecs from './ecs';

export const mk = (msg, selectors) => {
    return {
        event_id: selectors[0],
        selectors: selectors,
        msg: msg
    };
};

/**
 * TODO: Fix
 */
export const emit_events = state => {
    const all_queues = ecs.get.events_queue(state);
    const new_queue = [];
    return {
        ...state,
        events: {
            ...state.events,
            queue: new_queue
        }
    };
};

export const get_subscribed = (queue, entity_id, selectors_coll) => {
    const cb = (accum, sel) => {
        const queue_selector = queue.hasOwnProperty(sel)? queue[sel] : {};
        const queue_selector_events = queue_selector.hasOwnProperty(entity_id)? queue_selector[entity_id] : [];
        return queue_selector_events.reduce((acc, evt) => acc.concat(evt), accum);
    };
    return selectors_coll.reduce(cb, []);
};

export const clear = state => {
    return {
        ...state,
        events: {
            queue: []
        }
    };
};
