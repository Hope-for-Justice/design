export function TypeExamples({ type }) {
  return (
    <div>
      {type && type === 'canela' && (
        <>
          <div className="not-prose font-display text-3xl text-neutral-900">
            Canela Medium
          </div>
          <div className="not-prose font-display text-2xl text-neutral-900">
            Canela Medium
          </div>
          <div className="not-prose font-display text-xl text-neutral-900">
            Canela Medium
          </div>
        </>
      )}

      {type === 'fk' && (
        <>
          <h2 className="not-prose font-fk text-4xl text-neutral-900">
            FK SCREAMER
          </h2>
          <h2 className="not-prose font-fk text-3xl text-neutral-900">
            FK SCREAMER
          </h2>
          <h2 className="not-prose font-fk text-2xl text-neutral-900">
            FK SCREAMER
          </h2>
        </>
      )}

      {type === 'apercu' && (
        <>
          <h2 className="not-prose text-2xl font-bold text-neutral-900">
            Apercu Pro
          </h2>
          <h2 className="not-prose text-xl font-bold text-neutral-900">
            Apercu Pro
          </h2>
          <h2 className="not-prose text-lg font-bold text-neutral-900">
            Apercu Pro
          </h2>
        </>
      )}
    </div>
  )
}
