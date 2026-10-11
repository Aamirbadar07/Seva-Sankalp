import test from 'node:test';
import assert from 'node:assert/strict';

import { INITIAL_NGO_PARTNERS, SAMPLE_CERTIFICATE_PRESETS, parseDocumentHeuristically } from './ngoData.ts';

test('INITIAL_NGO_PARTNERS contains valid registered organizations across key civic sectors', () => {
  assert.ok(INITIAL_NGO_PARTNERS.length >= 3);
  for (const ngo of INITIAL_NGO_PARTNERS) {
    assert.ok(ngo.id.startsWith('ngo-'));
    assert.ok(ngo.name.length > 3);
    assert.ok(ngo.registrationNumber.length > 5);
    assert.ok(ngo.districts.length > 0);
    assert.ok(ngo.sectors.length > 0);
    assert.equal(ngo.verificationStatus, 'verified');
    assert.ok(Number(ngo.darpanConfidence) >= 90);
  }
});

test('SAMPLE_CERTIFICATE_PRESETS provide SVG certificates and complete extracted details', () => {
  assert.ok(SAMPLE_CERTIFICATE_PRESETS.length >= 2);
  for (const preset of SAMPLE_CERTIFICATE_PRESETS) {
    assert.ok(preset.dataUrl.startsWith('data:image/svg+xml'));
    assert.ok(preset.extracted.name.length > 0);
    assert.ok(preset.extracted.registrationNumber.length > 0);
    assert.ok(preset.extracted.darpanConfidence >= 95);
    assert.ok(preset.extracted.sectors.length > 0);
  }
});

test('parseDocumentHeuristically falls back safely with valid structure', () => {
  const result = parseDocumentHeuristically('NITI Aayog NGO Darpan Registration scan', 'darpan_cert.jpg');
  assert.ok(result.name.length > 0);
  assert.ok(result.registrationNumber.length > 0);
  assert.ok(result.sectors.length > 0);
  assert.ok(result.rawExtractedText?.includes('darpan_cert.jpg'));
});
