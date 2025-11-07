import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
    // Create 4 folders
  const projectDocs = await createFolder({ name: "Project Docs" });
  const images = await createFolder({ name: "Images" });
  const sourceCode = await createFolder({ name: "Source Code" });
  const archive = await createFolder({ name: "Archive" });

  console.log("📁 Folders created!");

  // ---- Project Docs (Folder 1) ----
  await createFile({ name: "requirements.md", size: 120, folder_id: projectDocs.id });
  await createFile({ name: "architecture.pdf", size: 2048, folder_id: projectDocs.id });
  await createFile({ name: "meeting-notes.docx", size: 256, folder_id: projectDocs.id });
  await createFile({ name: "timeline.xlsx", size: 98, folder_id: projectDocs.id });
  await createFile({ name: "proposal-final.pdf", size: 3100, folder_id: projectDocs.id });
  await createFile({ name: "readme.txt", size: 3, folder_id: projectDocs.id });

  // ---- Images (Folder 2) ----
  await createFile({ name: "logo.png", size: 500, folder_id: images.id });
  await createFile({ name: "banner.jpg", size: 1200, folder_id: images.id });
  await createFile({ name: "background.webp", size: 2560, folder_id: images.id });
  await createFile({ name: "profile.jpg", size: 985, folder_id: images.id });
  await createFile({ name: "icons.svg", size: 48, folder_id: images.id });
  await createFile({ name: "thumbnail.png", size: 210, folder_id: images.id });

  // ---- Source Code (Folder 3) ----
  await createFile({ name: "index.js", size: 15, folder_id: sourceCode.id });
  await createFile({ name: "app.js", size: 32, folder_id: sourceCode.id });
  await createFile({ name: "database.js", size: 40, folder_id: sourceCode.id });
  await createFile({ name: "routes.js", size: 20, folder_id: sourceCode.id });
  await createFile({ name: "server.js", size: 26, folder_id: sourceCode.id });
  await createFile({ name: "config.json", size: 2, folder_id: sourceCode.id });

  // ---- Archive (Folder 4) ----
  await createFile({ name: "old_report.pdf", size: 1500, folder_id: archive.id });
  await createFile({ name: "backup.zip", size: 51200, folder_id: archive.id });
  await createFile({ name: "legacy_code.js", size: 70, folder_id: archive.id });
  await createFile({ name: "notes.txt", size: 4, folder_id: archive.id });
  await createFile({ name: "invoice-2019.pdf", size: 600, folder_id: archive.id });
  await createFile({ name: "image-old.png", size: 300, folder_id: archive.id });

  console.log("✅ 4 folders and 24 files seeded!");
}
