const base64Font = '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'
export default base64Font
