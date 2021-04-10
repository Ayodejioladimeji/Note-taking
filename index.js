function getNoteId() {
    let noteObject = getExistingNotes()
    if (!noteObject) {
        return 1
    }
    const keysArray = Object.keys(noteObject)
    const numberkeys = keysArray.map((key) => Number(key))
    console.log(numberkeys)
    return Math.max(...numberkeys) + 1
}



function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if (!notes) {
        return null
    }
    return JSON.parse(notes)
}