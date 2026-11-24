import test from 'node:test';import assert from 'node:assert/strict';import {classify,gate,safeURL,musicalNote} from './gesture.js';
test('hold triggers once until gesture changes',()=>{let s=gate({gesture:'none'},'peace',0);s=gate(s,'peace',900);assert.equal(s.trigger,true);assert.equal(gate(s,'peace',2000).trigger,false);});
test('only valid web URLs are accepted',()=>{assert.equal(safeURL('javascript:alert(1)'),null);assert.equal(safeURL('https://example.com'),'https://example.com/');assert.equal(safeURL('https://a:b@example.com'),null)});
test('empty landmarks and note boundaries',()=>{assert.equal(classify([]),'none');assert.equal(musicalNote(-1),60);assert.equal(musicalNote(1),76)});
