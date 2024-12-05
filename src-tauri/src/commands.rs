#[tauri::command]
pub fn show_notification(title: String, body: String) -> Result<(), String> {
    #[cfg(target_os = "macos")]
    {
        use mac_notification_sys::{Notification, NotificationBuilder};
        
        Notification::new()
            .title(&title)
            .message(&body)
            .show()
            .map_err(|e| e.to_string())?;
    }

    #[cfg(target_os = "windows")]
    {
        use windows::UI::Notifications::{ToastNotificationManager, ToastNotification};
        
        // Windows-specific notification logic
        return Ok(());
    }

    #[cfg(target_os = "linux")]
    {
        use notify_rust::Notification;
        
        Notification::new()
            .summary(&title)
            .body(&body)
            .show()
            .map_err(|e| e.to_string())?;
    }

    Ok(())
}