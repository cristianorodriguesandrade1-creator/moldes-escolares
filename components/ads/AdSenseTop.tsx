export default function AdSenseTop() {
  return (
    <div className="my-6 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
      <div className="inline-block w-full max-w-screen-md">
        {/* Google AdSense - Placeholder */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
          }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        ></ins>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
        <p className="text-xs text-gray-500 mt-2">Anúncio</p>
      </div>
    </div>
  );
}
