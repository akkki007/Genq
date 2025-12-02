"use client";

interface GoogleMapsEmbedProps {
  className?: string;
  height?: string;
}

export function GoogleMapsEmbed({ className = "", height = "400px" }: GoogleMapsEmbedProps) {
  // Address: Dhole patel rd near ruby hall opposite kotak mahindra bank choice argade D building office no 34 Pune 411001
  const address = encodeURIComponent("Dhole patel rd near ruby hall opposite kotak mahindra bank choice argade D building office no 34 Pune 411001");
  
  // Using Google Maps embed URL that works without API key
  const embedUrl = `https://www.google.com/maps?q=${address}&output=embed`;

  return (
    <div className={`w-full overflow-hidden rounded-xl border ${className}`} style={{ height }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title="Genq Office Location - Pune"
        aria-label="Google Maps showing Genq office location at Dhole patel rd near ruby hall opposite kotak mahindra bank choice argade D building office no 34 Pune 411001"
      />
    </div>
  );
}

