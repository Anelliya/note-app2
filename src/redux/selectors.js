export const getNotesselector = state => state.notes;

export const getArchivedNotes = notes =>
  notes.filter(note => note.status === 'archived');

export const getActiveNotes = notes =>
  notes.filter(note => note.status === 'active');

export const getSummary = notes => {
  let summaryData = {
    Task: {
      totalActive: 0,
      totalArchived: 0,
    },
    'Random Thought': {
      totalActive: 0,
      totalArchived: 0,
    },
    Idea: {
      totalActive: 0,
      totalArchived: 0,
    },
  };

  notes.forEach(({ category, status }) => {
    if (status === 'active') {
      summaryData[category].totalActive += 1;
    }

    if (status === 'archived') {
      summaryData[category].totalArchived += 1;
    }
  });

  return summaryData;
};

export const currentNote = ({ notes, id }) => {
  notes.find(note => note.id === id);
};
