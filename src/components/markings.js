import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { Block, Line } from 'components';

export const markings = createFragment({
  top: <Line
    w={100} h={1}
    col="1 / -1" row="1 / 2"
  />,
  right: <Line
    w={1} h={100}
    col="-1 / -2" row="1 / -1"
    className="self-justify-end"
  />,
  bottom: <Line
    w={100} h={1}
    col="1 / -1" row="-1 / -2"
    className="self-end"
  />,
  left: <Line
    w={1} h={100}
    col="1 / 2" row="1 / -1"
  />,
  center: <Line
    w={100} h={1}
    col="1 / -1" row="8 / 9"
    className="self-center"
  />,
  circle: <Block
    ba="white" bw={4} radius={100}
    w={4} h={4}
    col="2 / -2" row="7 / 10"
    className="self-justify-center self-center"
  />,
  bottomPALeft: <Line
    w={1} h={100}
    col="2 / 3" row="-1 / -3"
  />,
  bottomPAHorizontal: <Line
    w={100} h={1}
    col="2 / 5" row="-3 / -4"
    className="self-end"
  />,
  bottomPARight: <Line
    w={1} h={100}
    col="-2 / -3" row="-1 / -3"
    className="self-justify-end"
  />,
  topPALeft: <Line
    w={1} h={100}
    col="2 / 3" row="1 / 3"
  />,
  topPAHorizontal: <Line
    w={100} h={1}
    col="2 / 5" row="3 / 3"
    className="self-start"
  />,
  topPARight: <Line
    w={1} h={100}
    col="-2 / -3" row="1 / 3"
    className="self-justify-end"
  />,
});
