import * as React from 'react';
import type {FC} from 'react';

import ElectronVersions from '/@/components/ElectronVersions';
import {Counter} from '/@/components/Counter';

export const Hello: FC = () => {
    return (
        <div>
            <h1>Welcome to vite-electron-template!</h1>
            <p>Electron.js + Vite.js + React</p>
            <Counter/>
            <ElectronVersions />
        </div>
    );
};

  