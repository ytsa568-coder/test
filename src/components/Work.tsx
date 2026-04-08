import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const storytellingVideos = [
  "https://youtu.be/qgVcQQU_gbg",
  "https://youtu.be/3TEEBCLsQcI",
  "https://youtu.be/-By2T-8D5HA",
  "https://youtu.be/ASZUPAN5Ec8",
  "https://youtu.be/R7990GCe9qA"
];

const animeEdits = [
  "https://youtu.be/VlEwINYWzcE",
  "https://youtu.be/BHOGsa-HO0c",
  "https://youtu.be/tS_iXVvu7QQ"
];

const Work = () => {
  const boxStyle = {
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: '2.5rem',
    borderRadius: '1.5rem',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Our <span>Work</span>
        </h2>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={boxStyle}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>STORYTELLING VIDEOS</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              Engineered for retention through compelling narrative pacing and immersive editing.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {storytellingVideos.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', border: '1px solid rgba(34, 211, 238, 0.3)' }}
                  data-cursor="disable"
                >
                  Video {idx + 1} <MdArrowOutward />
                </a>
              ))}
            </div>
          </div>

          <div style={boxStyle}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>ANIME EDITS</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              High-impact visuals and precise synchronization crafted for engagement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {animeEdits.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', border: '1px solid rgba(34, 211, 238, 0.3)' }}
                  data-cursor="disable"
                >
                  Video {idx + 1} <MdArrowOutward />
                </a>
              ))}
            </div>
          </div>

          <div style={boxStyle}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>THUMBNAILS</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>
              No other niches for now.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Work;
