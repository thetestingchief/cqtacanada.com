import { jsPDF } from "jspdf";

interface SponsorshipTier {
  level: string;
  price: string;
  highlight?: boolean;
  popular?: boolean;
  features: string[];
  description: string;
  contactButton?: boolean;
}

export function generateSponsorshipBrochure(): jsPDF {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Set PDF document properties
  doc.setProperties({
    title: 'CQTA Sponsorship Opportunities - Canadian Quality and Testing Association',
    subject: 'CQTA Sponsorship Package Information and Benefits',
    author: 'Canadian Quality and Testing Association (CQTA)',
    keywords: 'CQTA, Sponsorship, Quality Engineering, Software Testing, QA, Canada, Tech Events, Brand Exposure',
    creator: 'CQTA - cqtacanada.com'
  });

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 20) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      addFooter();
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add footer to each page
  const addFooter = () => {
    const footerY = pageHeight - 12;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text(`© ${new Date().getFullYear()} Canadian Quality and Testing Association. All rights reserved.`, pageWidth / 2, footerY, { align: "center" });
    doc.setTextColor(0, 0, 0);
  };

  // Header - CQTA branding with logo (white background for logo visibility)
  doc.setFillColor(255, 255, 255); // White color for logo visibility
  doc.rect(0, 0, pageWidth, 45, "F");
  
  // Add CQTA logo
  const logoData = 'data:image/png;base64,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';
  doc.addImage(logoData, 'PNG', 10, 5, 35, 35);
  
  // Add red border at bottom of header
  doc.setDrawColor(204, 0, 0);
  doc.setLineWidth(3);
  doc.line(0, 45, pageWidth, 45);
  
  doc.setTextColor(204, 0, 0); // Red text
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Canadian Quality and Testing Association", 50, 28, { align: "left" });
  
  yPosition = 55;
  doc.setTextColor(0, 0, 0);

  // Main Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Sponsorship Opportunities", pageWidth / 2, yPosition, { align: "center" });
  yPosition += 12;

  // Introduction box
  doc.setFillColor(245, 245, 245); // Very light gray
  const introHeight = 28;
  doc.rect(margin, yPosition, contentWidth, introHeight, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60); // Dark gray for better readability
  const introLines = doc.splitTextToSize(
    "Partner with CQTA to elevate your brand and contribute to the advancement of quality engineering in Canada. Our sponsorship packages provide exceptional opportunities for brand exposure, industry leadership, and engagement with Canada's premier quality engineering community.",
    contentWidth - 10
  );
  let introY = yPosition + 7;
  introLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, introY, { align: "center" });
    introY += 5;
  });
  doc.setTextColor(0, 0, 0);
  yPosition += introHeight + 12;

  // Sponsorship tiers data
  const sponsorshipTiers: SponsorshipTier[] = [
    {
      level: "Executive",
      price: "$7,500 CAD",
      highlight: true,
      features: [
        "All Gold, Silver & Bronze benefits",
        "Exclusive 30-minute speaker slot",
        "Opportunity to demo product(s)",
        "Sponsor CQTA Awards",
        "Highest tier branding & recognition"
      ],
      description: "Includes all benefits of Gold, Silver and Bronze sponsors with exclusive premium features"
    },
    {
      level: "Gold",
      price: "$5,000 CAD",
      popular: true,
      features: [
        "5 social media shoutouts (2 post-event)",
        "Recognition twice during the event",
        "Table booth at event venue",
        "Post-event attendee contact list (opt-in)",
        "6 complimentary event passes",
        "5-minute speaking slot in keynote/panel",
        "Branded swag in attendee kits"
      ],
      description: "Premium sponsorship with extensive brand exposure and engagement opportunities"
    },
    {
      level: "Silver",
      price: "$3,000 CAD",
      features: [
        "3 social media shoutouts (1 post-event)",
        "Recognition once during the event",
        "Table booth at event venue",
        "4 complimentary event passes",
        "Branded swag in attendee kits"
      ],
      description: "Ideal mid-tier sponsorship with excellent brand visibility"
    },
    {
      level: "Bronze",
      price: "$2,000 CAD",
      features: [
        "2 social media shoutouts (1 post-event)",
        "Recognition once during the event",
        "Sponsor logo displayed on event banner",
        "2 complimentary event passes",
        "Branded swag in attendee kits"
      ],
      description: "Entry-level sponsorship with solid brand exposure"
    },
    {
      level: "After Hours",
      price: "Contact us for more info",
      contactButton: true,
      features: [
        "Exclusive after-hours networking session sponsorship",
        "3 social media shoutouts (1 post-event)",
        "Recognition during after-hours session",
        "Table booth at the venue",
        "Post-event attendee contact list (opt-in)"
      ],
      description: "Exclusive sponsorship opportunity for the after-hours networking experience"
    }
  ];

  // Helper function to render a single tier card
  const renderTierCard = (tier: SponsorshipTier, xPos: number, yPos: number, cardWidth: number) => {
    let cardY = yPos;
    const cardHeight = 70;
    
    // Border color: all cards use light gray
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    
    doc.setFillColor(249, 249, 249);
    doc.roundedRect(xPos, cardY, cardWidth, cardHeight, 3, 3, "FD");

    // Tier name
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`${tier.level} Sponsor`, xPos + 5, cardY + 9);
    
    // Price - at bottom, $ in front, prominent, center-aligned
    const priceText = tier.price.replace(/\$/g, '').trim();
    const hasPrice = !tier.price.includes('Contact');
    const priceY = yPos + cardHeight - 8;
    if (hasPrice) {
      doc.setTextColor(204, 0, 0);
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text(`$ ${priceText}`, xPos + cardWidth / 2, priceY, { align: "center" });
    } else {
      doc.setTextColor(204, 0, 0);
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(tier.price, xPos + cardWidth / 2, priceY, { align: "center" });
    }
    doc.setTextColor(0, 0, 0);
    
    cardY += 14;

    // Description
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(tier.description, cardWidth - 10);
    descLines.forEach((line: string) => {
      doc.text(line, xPos + 5, cardY);
      cardY += 3.5;
    });
    doc.setTextColor(0, 0, 0);
    cardY += 2;

    // Features
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    tier.features.forEach((feature) => {
      if (cardY > yPos + cardHeight - 5) return; // Stop if we run out of space
      doc.setTextColor(204, 0, 0);
      doc.text("✓", xPos + 5, cardY);
      doc.setTextColor(0, 0, 0);
      const featureLines = doc.splitTextToSize(feature, cardWidth - 15);
      const firstLine = featureLines[0];
      doc.text(firstLine, xPos + 9, cardY);
      cardY += 4;
    });

    return cardHeight;
  };

  // Row 1: Executive and Gold
  checkNewPage(80);
  const columnGap = 8;
  const cardWidth = (contentWidth - columnGap) / 2;
  
  renderTierCard(sponsorshipTiers[0], margin, yPosition, cardWidth); // Executive
  renderTierCard(sponsorshipTiers[1], margin + cardWidth + columnGap, yPosition, cardWidth); // Gold
  yPosition += 75;

  // Row 2: Silver and Bronze
  checkNewPage(80);
  renderTierCard(sponsorshipTiers[2], margin, yPosition, cardWidth); // Silver
  renderTierCard(sponsorshipTiers[3], margin + cardWidth + columnGap, yPosition, cardWidth); // Bronze
  yPosition += 75;

  // Row 3: After Hours (full width, special card)
  checkNewPage(80);
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.setFillColor(249, 249, 249);
  doc.roundedRect(margin, yPosition, contentWidth, 65, 3, 3, "FD");
  
  // After Hours tier details
  const afterHours = sponsorshipTiers[4];
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(`${afterHours.level} Sponsor`, margin + 5, yPosition + 10);
  // Price at bottom, $ in front, center-aligned and prominent
  const afterHoursPriceY = yPosition + 65 - 8;
  doc.setTextColor(204, 0, 0);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(afterHours.price.startsWith('$') ? afterHours.price : `$ ${afterHours.price}`, pageWidth / 2, afterHoursPriceY, { align: "center" });
  doc.setTextColor(0, 0, 0);
  
  let afterHoursY = yPosition + 18;

  // Description
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  const ahDescLines = doc.splitTextToSize(afterHours.description, contentWidth - 15);
  ahDescLines.forEach((line: string) => {
    doc.text(line, margin + 5, afterHoursY);
    afterHoursY += 4;
  });
  doc.setTextColor(0, 0, 0);
  afterHoursY += 2;

  // Features
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  afterHours.features.forEach((feature) => {
    doc.setTextColor(204, 0, 0);
    doc.text("✓", margin + 7, afterHoursY);
    doc.setTextColor(0, 0, 0);
    const featureLines = doc.splitTextToSize(feature, contentWidth - 20);
    featureLines.forEach((line: string, index: number) => {
      doc.text(line, margin + 12, afterHoursY);
      if (index < featureLines.length - 1) afterHoursY += 4;
    });
    afterHoursY += 5;
  });

  yPosition += 75;

  // CTA Section - "Join CQTA as a Sponsor"
  checkNewPage(50);
  doc.setFillColor(204, 0, 0);
  doc.roundedRect(margin, yPosition, contentWidth, 38, 5, 5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Join CQTA as a Sponsor", pageWidth / 2, yPosition + 11, { align: "center" });
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Showcase your commitment to quality engineering and connect directly with", pageWidth / 2, yPosition + 20, { align: "center" });
  doc.text("industry professionals through Canada's fast-growing hub for testing innovation.", pageWidth / 2, yPosition + 27, { align: "center" });
  
  doc.setFont("helvetica", "bold");
  doc.text("Contact us today to discuss your sponsorship package!", pageWidth / 2, yPosition + 34, { align: "center" });
  
  // Add contact info with hyperlinks
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Visit: ", pageWidth / 2 - 25, yPosition + 42, { align: "center" });
  doc.setTextColor(255, 255, 255);
  doc.textWithLink("cqtacanada.com", pageWidth / 2 + 5, yPosition + 42, { url: "https://cqtacanada.com" });
  
  doc.text("Email: ", pageWidth / 2 - 25, yPosition + 48, { align: "center" });
  doc.textWithLink("cqtacanada@gmail.com", pageWidth / 2 + 5, yPosition + 48, { url: "mailto:cqtacanada@gmail.com" });
  
  yPosition += 58;
  doc.setTextColor(0, 0, 0);

  // Footer
  doc.setFillColor(204, 0, 0);
  doc.rect(0, pageHeight - 28, pageWidth, 28, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Canadian Quality and Testing Association", pageWidth / 2, pageHeight - 18, { align: "center" });
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(`© ${new Date().getFullYear()} Canadian Quality and Testing Association. All rights reserved.`, pageWidth / 2, pageHeight - 8, { align: "center" });

  return doc;
}
