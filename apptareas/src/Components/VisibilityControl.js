import React, { useState } from 'react';

export const VisibilityControl = props => {
    return (
        <div>
            <input
            type="checkbox"
            className="form-check-input"
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)}
            ></input>
            <label htmlFor="form-check-label">Completados</label>
        </div>
    )
}