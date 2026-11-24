import test from 'node:test';import assert from 'node:assert/strict';import {arrangement,sections} from './orchestra.js';
test('score has four distinct sections at full spread and strings only at low spread',()=>{assert.deepEqual([...new Set(arrangement(0,1).map(x=>x.section))],sections);assert.deepEqual([...new Set(arrangement(0,0).map(x=>x.section))],['Strings'])});
test('score changes harmony and repeats after 32 beats',()=>{assert.notDeepEqual(arrangement(0,1),arrangement(4,1));assert.deepEqual(arrangement(0,1),arrangement(32,1));});
