import { useSequencerStore } from '../utils/sequencerStore'

export default function Tracks() {
  const { state: { rows }, dispatch, actions } = useSequencerStore()
  return (
    <div className="tracks">
      {rows.map(({ notes }, i) => (
        <div className='row' key={i}>
          {notes.map((note, j) => (
            <button 
              onClick={() => {
                console.log('click')
                dispatch({
                  type: actions.TOGGLE_NOTE,
                  payload: {
                    rowIdx: i,
                    noteIdx: j
                  }
                })
              }}
              key={j}
            />
          ))}
        </div>
      ))}
    </div>
  )
}