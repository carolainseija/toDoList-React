import React from 'react';

export const TaskBanner = props => (
 <h4 className="bg-danger text-white text-center p-4">
     {props.userName}Task App {props.taskItems.filter(t => !t.done).length + " "}task por hacer
 </h4>
)