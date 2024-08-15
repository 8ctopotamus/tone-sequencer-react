import * as Tone from 'tone'
import { useEffect, useRef, useState } from 'react'
import { useSequencerStore } from '../utils/sequencerStore'

let transport = Tone.getTransport()

export default function Player () {
  const { state: { rows }, dispatch } = useSequencerStore()
  const [bpm, setBpm] = useState(120)
  const [isPlaying, setIsPlaying] = useState(false)
  const beatRef = useRef(0)

  useEffect(() => {
    transport.scheduleRepeat(time => {

      rows.forEach((row) => {
        const synth = row.synth
        const note = row.notes[beatRef.current]

        console.log(note.active)

        if (note.active) synth.triggerAttackRelease(note.note, '8n', time)
      })

      beatRef.current = ((beatRef.current + 1) % 16)
    }, '16n')
  }, [rows])

  const play = () => {
    if (!isPlaying) {
      Tone.start()
      transport.bpm.value = bpm
      transport.start()
      setIsPlaying(true)
    }
  }

  const stop = () => {
    transport.stop()
    setIsPlaying(false)
  }

  return (
    <>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}