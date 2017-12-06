import {
  Control,
} from 'jsonforms-inferno/dist/ts-build/renderers/controls/Control';
import { JSX } from 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import { connect } from 'react-redux';
import React from 'react';
import {
  RankedTester,
  rankWith,
  refEndsWith
} from 'jsonforms-inferno/dist/ts-build/core/testers';
import { Rating } from './Rating';
import { mapStateToControlProps } from 'jsonforms-inferno/dist/ts-build/renderers/renderer.util'

/**
 * Default tester for integer controls.
 * @type {RankedTester}
 */
export const ratingControlTester = rankWith(Number.MAX_VALUE, refEndsWith('rating'));

export class RatingControl extends Control {

  /**
   * @inheritDoc
   */
  render() {
    return (
      <Rating
        value={this.props.data}
        onClick={ev => this.onClick(ev)}
      />
    );
  }

  onClick(ev) {
    this.updateData(ev.value);
  }
}

export default connect(
  mapStateToControlProps,
  null
)(RatingControl)
