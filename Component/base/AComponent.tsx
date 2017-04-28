import { Component } from 'react';
import { objHp } from '../../helper';

export abstract class AComponent<P, S> extends Component<P, S> {
    protected alwaysUpdate = false;
    protected noUpdate = false;
    protected shouldComponentUpdate(nextProps: tCommon.reactProps, nextState: tCommon.reactState) {
        if (this.alwaysUpdate) {
            this.alwaysUpdate = false;
            return true
        };
        if (this.noUpdate) {
            this.noUpdate = false
            return false;
        }
        return !objHp.isEqual(nextProps, this.props) || !objHp.isEqual(nextState, this.state)
    }
}