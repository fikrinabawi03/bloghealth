/**
 * Mock Email Notification Service
 * In a real application, this should connect to EmailJS, Web3Forms, or your backend.
 */

export const sendCommentNotification = async (authorUsername: string, commentText: string) => {
    const targetEmail = "fikrinabawi02@gmail.com";
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 800));

    // Log the simulated email payload
    console.log(`
=========================================
📧 EMAIL NOTIFICATION SIMULATION
=========================================
To: ${targetEmail}
Subject: New comment from ${authorUsername} on your blog!

Body:
Hello! ${authorUsername} just left a new comment:
"${commentText}"

Reply to this comment natively in your dashboard.
=========================================
    `);

    return true; // Return true to indicate success
};
