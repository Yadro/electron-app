import React, {memo} from 'react';
import type {FC} from 'react';

const versions = Object.entries(window.versions)
  .sort(
    ([key1], [key2]) => key1.localeCompare(key2),
  );

const ElectronVersions: FC = () => {
    return (
        <>
            <ul>
                {versions.map(([lib, version]) => (
                    <li><strong>{lib}</strong>{`: v${version}`}</li>
                ))}
            </ul>
            <code>packages/renderer/src/components/ElectronVersions.tsx</code>
        </>
    );
};

export default memo(ElectronVersions);