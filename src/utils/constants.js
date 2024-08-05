import { Synth } from 'tone'

export const scaleOfNotes = ['C4', 'D4', 'Eb4', 'F4']

export const defaultContext = {
  rows: [
    {
      synth: new Synth().toDestination(),
      notes: Array.from({ length: 16 }, (_, i) => ({ note: scaleOfNotes[3], active: false  })),
    },
    {
      synth: new Synth().toDestination(),
      notes: Array.from({ length: 16 }, (_, i) => ({ note: scaleOfNotes[2], active: false  })),
    },
    {
      synth: new Synth().toDestination(),
      notes: Array.from({ length: 16 }, (_, i) => ({ note: scaleOfNotes[1], active: false  })),
    },
    {
      synth: new Synth().toDestination(),
      notes: Array.from({ length: 16 }, (_, i) => ({ note: scaleOfNotes[0], active: false  }))
    }    
  ]
}
