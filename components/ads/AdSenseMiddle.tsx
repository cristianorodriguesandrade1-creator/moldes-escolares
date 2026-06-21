export default function AdSenseMiddle() {
  return (
    <div className="my-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="flex justify-center">
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
          data-ad-slot="0987654321"
          data-ad-format="rectangle"
          data-full-width-responsive="false"
        ></ins>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">Anúncio</p>
    </div>
  );
}
