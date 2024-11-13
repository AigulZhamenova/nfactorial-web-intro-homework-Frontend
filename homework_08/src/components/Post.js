export default function Post(item){
    const publishedDate = new Date(item.created_date);
    const day = publishedDate.getDate();
    const month = publishedDate.toLocaleString('en', { month: 'long' });
    return (
        <div className="d-flex justify-content-between mt-5 border-bottom pb-4 flex-row gap-5" id="cont">
          <div id="article" className="d-flex flex-column gap-5">
            <div className="d-flex gap-2">
              <small id="author">
                {item.byline} <span className="text-muted"> in </span> {item.section}
              </small>
              <p className="m-0">·</p>
              <small className="text-muted" id="data">
                {day} {month}
              </small>
            </div>
            <div className="d-flex flex-column gap-3">
              <h3 id="title" className="fw-bold">
                {item.title}
              </h3>
              <p id="body">{item.abstract}</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <small className="py-1 px-3 bg-secondary text-black rounded-5">Java Script</small>
                <small className="text-muted py-1" id="data">
                  12 min read
                </small>
                <p className="m-0">·</p>
                <small className="text-muted py-1" id="selected">
                  Selected for you
                </small>
              </div>
            </div>
          </div>
          <img src={item.multimedia[0].url} alt={item.title} className="rounded-2 w-25" />
        </div>)
}