export default function StatCard({ title, bigValue, textFooter, icon }) {
    return (
      <div className="card statCard">
        <div className="statTop">
          <p className="statTit">{title}</p>

          {icon ? <span className="statIcon">{icon}</span> : null}
        </div>

        {bigValue ? <span className="statValue">{bigValue}</span> : null}

        <p className="statFooter">
            {textFooter}
        </p>
      </div>
    );
}