export const SectionFeedback = (title, children) => {
    return (
        <section>
            <h2>{title}</h2> 
             {children.map(children, child =>
        <p >
          "child":{child}
        </p>
      )}
        </section>
        
    )
}