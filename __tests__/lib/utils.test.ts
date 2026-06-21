import { slugify, unslugify, truncate, generateSeoTitle } from '@/lib/utils'

describe('Utils', () => {
  describe('slugify', () => {
    it('converts to lowercase and replaces spaces with hyphens', () => {
      expect(slugify('Festa Junina')).toBe('festa-junina')
    })

    it('removes special characters', () => {
      expect(slugify('Molde!@# Especial')).toBe('molde-especial')
    })

    it('handles multiple spaces', () => {
      expect(slugify('Multiple   Spaces')).toBe('multiple-spaces')
    })
  })

  describe('unslugify', () => {
    it('converts slug to title case', () => {
      expect(unslugify('festa-junina')).toBe('Festa Junina')
    })

    it('handles single word', () => {
      expect(unslugify('molde')).toBe('Molde')
    })
  })

  describe('truncate', () => {
    it('truncates long text', () => {
      expect(truncate('This is a very long text that needs truncation', 20)).toBe(
        'This is a very long ...'
      )
    })

    it('does not truncate short text', () => {
      expect(truncate('Short', 20)).toBe('Short')
    })
  })

  describe('generateSeoTitle', () => {
    it('generates valid SEO title', () => {
      const title = generateSeoTitle('Molde Boi Bumba', 'Festa Junina')
      expect(title).toContain('Molde Boi Bumba')
      expect(title).toContain('Moldes Escolares')
    })
  })
})
