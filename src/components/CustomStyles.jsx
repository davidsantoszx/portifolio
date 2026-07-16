export default function CustomStyles() {
  return (
    <style>{`
      html {
        scroll-behavior: smooth;
      }

      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(30,30,30,.05);
      }

      .dark ::-webkit-scrollbar-track {
        background: rgba(255,255,255,.02);
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(120,120,120,.3);
        border-radius:3px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(120,120,120,.6);
      }

      .fade-in-section{
        opacity:0;
        transform:translateY(20px);
        transition:opacity .8s ease-out, transform .8s ease-out;
      }

      .fade-in-section.visible{
        opacity:1;
        transform:translateY(0);
      }
    `}</style>
  );
}