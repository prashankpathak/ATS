import React, { useState } from 'react';
import { ATS_CONTACT } from '../data/logisticsData';
import { Phone, MessageSquare, Mail, MapPin, Download, Check, Send, Building2, UserCheck, Award } from 'lucide-react';

export const ContactDesk: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryLoad, setInquiryLoad] = useState('');
  const [inquiryOrigin, setInquiryOrigin] = useState('Katni, MP');
  const [inquiryDestination, setInquiryDestination] = useState('');
  const [vCardCopied, setVCardCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleFastDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) {
      alert('Please enter your name and contact phone number.');
      return;
    }

    const text = encodeURIComponent(
      `*DIRECT FLEET DISPATCH INQUIRY - ATS TRANSPORT*\n` +
      `-------------------------------------------\n` +
      `*Client / Company:* ${inquiryName}\n` +
      `*Phone Number:* ${inquiryPhone}\n` +
      `*Origin Point:* ${inquiryOrigin}\n` +
      `*Destination Point:* ${inquiryDestination || 'Pan-India Freight Delivery'}\n` +
      `*Cargo Consignment:* ${inquiryLoad || 'Heavy Multi-Axle Truckload'}\n\n` +
      `Please provide immediate truck allocation and freight quote.`
    );

    window.open(`https://wa.me/91${ATS_CONTACT.phones[0].number}?text=${text}`, '_blank');
    setSubmittedStatus('Inquiry dispatched via WhatsApp to Ashima Pathak (+91 9009949723)!');
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ashima Pathak
ORG:ATS (Ashima transport service)
TITLE:Proprietor / Incharge
TEL;TYPE=CELL,VOICE:+919009949723
TEL;TYPE=CELL,VOICE:+919893563998
TEL;TYPE=CELL,VOICE:+916263364561
EMAIL;TYPE=PREF,INTERNET:Ashimapathak36@gmail.com
EMAIL;TYPE=INTERNET:prashankpathak@gmail.com
ADR;TYPE=WORK:;;Kailwara Kala, Maihar Road;Katni;Madhya Pradesh;483501;India
NOTE:YOUR TRUSTED TRANSPORT PARTNER - Pan-India Heavy Haulage & Multi-Axle Fleet
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ashima_Pathak_ATS_Transport.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setVCardCopied(true);
    setTimeout(() => setVCardCopied(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-[#141518] to-zinc-950 border border-amber-500/25 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            <span>Direct Proprietor Access & Central Operations Depot</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
            Connect Directly with ATS Transport Katni
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Direct owner access with Ashima Pathak for instant consignment bookings, multi-axle freight agreements, and depot dispatch.
          </p>
        </div>

        <button
          onClick={downloadVCard}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 text-xs font-mono font-medium rounded-lg border border-amber-500/30 transition-colors self-start md:self-auto"
        >
          {vCardCopied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Contact Card Saved (.vcf)</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-amber-400" />
              <span>Save Official Contact Card (.vcf)</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Luxury Digital Card Credentials (Using details from visiting card, without raw photo) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-[#18191d] to-[#0e0f12] border border-amber-500/30 rounded-xl p-6 relative overflow-hidden gold-glow">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-5 border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Verified Proprietor / Incharge
                </span>
                <h4 className="text-2xl font-bold text-white font-display mt-0.5">
                  {ATS_CONTACT.proprietor}
                </h4>
                <div className="text-xs text-zinc-300 font-semibold mt-0.5">
                  {ATS_CONTACT.company}
                </div>
                <div className="text-[11px] text-amber-300/80 italic font-mono mt-0.5">
                  &ldquo;{ATS_CONTACT.tagline}&rdquo;
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-display font-black text-xl shadow-md border border-amber-300/40 shrink-0">
                ATS
              </div>
            </div>

            {/* Direct Phone Dialing Grid */}
            <div className="space-y-2 mb-5">
              <span className="text-xs font-mono text-zinc-400 block mb-1">
                One-Touch Direct Calling Lines:
              </span>
              {ATS_CONTACT.phones.map((phone) => (
                <div
                  key={phone.number}
                  className="flex items-center justify-between p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-white font-mono font-semibold">
                      {phone.formatted}
                    </span>
                    {phone.isPrimary && (
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.2 rounded font-mono font-medium">
                        Primary Desk
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${phone.number}`}
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-[11px] transition-colors"
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/91${phone.number}?text=${encodeURIComponent(
                        'Hello Ashima Pathak ji, I need heavy freight transport service from ATS Katni.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-[11px] transition-colors flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Emails */}
            <div className="space-y-1.5 border-t border-zinc-800/80 pt-4 mb-4">
              <span className="text-xs font-mono text-zinc-400 block">
                Official Consignment Correspondence:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ATS_CONTACT.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}?subject=Freight%20Consignment%20Inquiry%20-%20ATS%20Transport`}
                    className="flex items-center gap-2 p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:text-white hover:border-amber-500/30 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate font-mono">{email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Registered Depot Address */}
            <div className="border-t border-zinc-800/80 pt-4">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 font-mono block">Registered Operating Depot:</span>
                  <div className="text-zinc-200 font-medium">
                    {ATS_CONTACT.address.line1}, {ATS_CONTACT.address.road}, {ATS_CONTACT.address.city} - {ATS_CONTACT.address.pincode} ({ATS_CONTACT.address.state})
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Strategic central junction connecting Northern & Southern industrial corridors.
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${ATS_CONTACT.address.googleMapsSearchQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-mono mt-1.5 underline"
                  >
                    Open Location in Google Maps ➔
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Instant Express Inquiry Form */}
        <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Direct Dispatch Request
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                Direct Desk Response
              </span>
            </div>

            <p className="text-xs text-zinc-400 mb-4">
              Submit your cargo specifications below for an immediate callback or one-tap WhatsApp dispatch to Ashima Pathak.
            </p>

            <form onSubmit={handleFastDispatch} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-300 mb-1">Your Full Name / Company</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Verma (Jindal / Birla)"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXXXXXXX"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-300 mb-1">Pickup Location</label>
                  <input
                    type="text"
                    value={inquiryOrigin}
                    onChange={(e) => setInquiryOrigin(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-300 mb-1">Delivery Destination</label>
                  <input
                    type="text"
                    placeholder="e.g. JNPT Mumbai / Delhi NCR"
                    value={inquiryDestination}
                    onChange={(e) => setInquiryDestination(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1">Cargo Details & Weight (Tons)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. 28 Metric Tons TMT Steel Bars, needs 14-wheeler trailer loading tomorrow"
                  value={inquiryLoad}
                  onChange={(e) => setInquiryLoad(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {submittedStatus && (
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-lg flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{submittedStatus}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm rounded-lg transition-colors shadow-lg shadow-amber-950/40"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Dispatch to WhatsApp (+91 9009949723)</span>
              </button>
            </form>
          </div>

          <div className="text-[11px] text-zinc-500 text-center pt-3 border-t border-zinc-800">
            For critical breakdown or urgent en-route driver support, dial 24/7 direct: <span className="text-amber-400 font-mono font-semibold">+91 9009949723</span>
          </div>
        </div>
      </div>
    </div>
  );
};
