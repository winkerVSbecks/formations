import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { Player } from 'components';
import { withHomeAway } from 'enhancers';

export const f352 = withHomeAway(({
  near, far, dir, left, right, center, middle, color,
}) =>
  createFragment({
    gk: <Player
      w={2} h={2}
      color={color}
      col={`${dir*3} / ${dir*4}`}
      row={`${dir*1} / ${dir*2}`}
      className={`${center} ${far}`}
    />,
    cb1: <Player
      w={2} h={2}
      color={color}
      col={`${dir*2} / ${dir*3}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${near} ${center}`}
    />,
    cb2: <Player
      w={2} h={2}
      color={color}
      col={`${dir*3} / ${dir*4}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${near} ${center}`}
    />,
    cb3: <Player
      w={2} h={2}
      color={color}
      col={`${dir*-2} / ${dir*-3}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${near} ${center}`}
    />,
    lwb: <Player
      w={2} h={2}
      color={color}
      col={`${dir*1} / ${dir*2}`}
      row={`${dir*5} / ${dir*6}`}
      className={`${near} ${center}`}
    />,
    rwb: <Player
      w={2} h={2}
      color={color}
      col={`${dir*-1} / ${dir*-2}`}
      row={`${dir*5} / ${dir*6}`}
      className={`${near} ${center}`}
    />,
    dm: <Player
      w={2} h={2}
      color={color}
      col={`${dir*3} / ${dir*4}`}
      row={`${dir*4} / ${dir*5}`}
      className={`${far} ${center}`}
    />,
    cm1: <Player
      w={2} h={2}
      color={color}
      col={`${dir*2} / ${dir*3}`}
      row={`${dir*5} / ${dir*6}`}
      className={`${far} ${center}`}
    />,
    cm2: <Player
      w={2} h={2}
      color={color}
      col={`${dir*-2} / ${dir*-3}`}
      row={`${dir*5} / ${dir*6}`}
      className={`${far} ${center}`}
    />,
    cf1: <Player
      w={2} h={2}
      color={color}
      col={`${dir*2} / ${dir*3}`}
      row={`${dir*7} / ${dir*8}`}
      className={`${near} ${left}`}
    />,
    cf2: <Player
      w={2} h={2}
      color={color}
      col={`${dir*-2} / ${dir*-3}`}
      row={`${dir*7} / ${dir*8}`}
      className={`${near} ${right}`}
    />,
  }));
