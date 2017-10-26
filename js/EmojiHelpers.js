var EmojiHelpers = {
    getTriggers: emoji => console.log(emojiData.filter(e => e.emoji == emoji).map(e => e.triggers)[0]),
    getAll: () => console.log(emojiData.map(e => e.emoji).join(''))
}