
const Call = () => {
  return (
    <>
      <div className="floating-buttons">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/0596957440"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <svg
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.2 283.2 32 224.4 32 112.1 32 32 128.2 32 223.7c0 36.6 9.6 72.4 27.9 103.9L24 480l155.7-40.9c29.4 15.7 62.3 23.9 96.1 23.9h.1c112.3 0 192.3-96.1 192.3-191.6 0-48.9-20.5-95.5-57.3-130.3zM224.4 438.7c-27.7 0-54.9-7.3-78.7-21.2l-5.6-3.3-92.5 24.3 24.6-90.2-3.6-5.8c-17.4-28.2-26.6-60.8-26.6-94.7 0-85.5 69.9-158.9 158.4-158.9 42.4 0 82.3 16.6 112.4 46.7 30.1 30.1 47.4 70.1 47.4 112.5 0 88.2-72 159.6-155.8 159.6zm101.7-122.7c-5.6-2.8-33.3-16.4-38.5-18.2-5.2-1.9-9-2.8-12.8 2.8s-14.7 18.2-18 22c-3.3 3.8-6.6 4.3-12.2 1.4-33.3-16.4-55.2-29.3-77.2-66.2-5.8-10 5.8-9.3 16.4-30.9 1.8-3.8.9-7.1-.5-10s-12.8-30.9-17.5-42.3c-4.6-11.1-9.3-9.5-12.8-9.7-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-19.9 19.5-19.9 47.5s20.4 55.2 23.3 59c2.8 3.8 39.6 60.4 95.9 84.7 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.3 25.6 3.7 35.3 2.3 10.8-1.6 33.3-13.6 38-26.8 4.7-13.1 4.7-24.3 3.3-26.8-1.4-2.3-5.1-3.8-10.7-6.6z" />
          </svg>
          <span>واتساب</span>
        </a>

        {/* Call Button */}
        <a href="tel:0596957440" className="call-button">
          <svg
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.1 383.3c0 20.3-12.7 49.8-31.8 68.1-26.2 25.5-51.9 26.7-73.6 25.2-16.2-1.1-34.9-6.6-55.5-14.6-40.9-16-88.4-45.2-141.2-98.1S99.2 249 83.2 208.2c-7.9-20.6-13.4-39.2-14.5-55.4-1.5-21.7-.3-47.4 25.2-73.6C112.2 60 141.6 47.2 161.8 47.2c5.2 0 9.8 1.3 13.4 3.8l78.7 63.4c4.8 3.8 7.8 9.5 8.2 15.6s-1.7 12-5.9 16.3l-33.9 34.3c-1.7 1.7-3.3 4.4-2.8 6.6.1.4 8.3 31.1 59.2 82s81.7 59 82 59.2c2.2.5 4.9-1.1 6.6-2.8l34.3-33.9c4.3-4.3 10.3-6.4 16.3-5.9 6.1.4 11.8 3.3 15.6 8.2l63.4 78.7c2.5 3.5 3.7 8.1 3.7 13.3z" />
          </svg>
          <span>اتصال</span>
        </a>
      </div>

      <style>{`
        .floating-buttons {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
        }

        .floating-buttons a {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: bold;
          color: white;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          transition: background-color 0.3s ease;
          font-family: sans-serif;
        }

        .whatsapp-button {
          background-color: #25d366;
        }

        .whatsapp-button:hover {
          background-color: #1ebe5d;
        }

        .call-button {
          background-color: #007bff;
        }

        .call-button:hover {
          background-color: #0069d9;
        }

        @media screen and (max-width: 480px) {
          .floating-buttons a {
            font-size: 13px;
            padding: 8px 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Call;
