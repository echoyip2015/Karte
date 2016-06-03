/**
 *
 * @authors 祝志颖 (c0de4ac@baicizhan.com)
 * @date    2016-03-28 15:12
 * @version 1.0.0
 */

import DeQueue from './datastruct/queue'
import {message} from 'antd';

class MapHistory {

    constructor(map, id, historySize = 16) {
        this.prevStates = new DeQueue(historySize);
        this.nextStates = new DeQueue(historySize);s
        this.maxSize = historySize;
        this.map = map;
        this.id = id;
    }

    clear() {
        this.nextStates.clear();
        this.prevStates.clear();
    }

    onDrawEnd(evt) {
        let state = {
            type: evt.type,
            target: evt.target,
            feature: evt.feature
        };
        console.log(state);
        this.prevStates.pushBack(state);
        this.nextStates.clear()
        this.map.setState({has_modify: true});
    }

    onModifyStart(evt) {
        let features = new ol.Collection();
        evt.features.forEach((feature)=>{
            features.push(feature.clone());
        })
        let state = {
            type: evt.type,
            target: evt.target,
            startfeatures: features
        };
        if (this.hasPrevState()) {
            let pstate = this.prevStates.popBack();
            if (pstate.type == 'modifyend') {
                pstate.endfeatures = features;
                this.prevStates.pushBack(pstate);
            }
        }
        this.prevStates.pushBack(state);
        this.nextStates.clear();
    }

    onModifyEnd(evt) {
        let state;
        let features = new ol.Collection();
        evt.features.forEach((feature)=>{
            features.push(feature);
        });
        if (this.hasPrevState()) {
            state = this.prevStates.popBack();
            state.type = evt.type;
            state.endfeatures = features;
            this.prevStates.pushBack(state);
            this.nextStates.clear();
            this.map.setState({has_modify: true});
        }
        else {
            console.log('not find start state');
            return
        }

    }

    hasPrevState() {
        return this.prevStates.size() > 0;
    }

    hasNextState() {
        return this.nextStates.size() > 0;
    }

    toPrevState() {
        if (this.hasPrevState()) {
            const state = this.prevStates.popBack();
            this.nextStates.pushBack(state);
            this.map.setState({has_modify: true});
            return state;
        }
    }

    toNextState() {
        if (this.hasNextState()) {
            const state = this.nextStates.popBack();
            this.prevStates.pushBack(state);
            this.map.setState({has_modify: true});
            return state;
        }
    }
}

export default MapHistory;