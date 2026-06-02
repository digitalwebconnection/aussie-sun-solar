
# Download all external images and save to src/assets/downloaded-images/
$outputDir = ".\src\assets\downloaded-images"
if (!(Test-Path $outputDir)) { New-Item -ItemType Directory -Path $outputDir | Out-Null }

$images = @(
    # Unsplash images
    @{ url = "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop"; name = "solar-roof-1.jpg" },
    @{ url = "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1920&auto=format&fit=crop"; name = "battery-storage-1.jpg" },
    @{ url = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1920&auto=format&fit=crop"; name = "ev-charger-1.jpg" },
    @{ url = "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1920&auto=format&fit=crop"; name = "commercial-solar-1.jpg" },
    @{ url = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop"; name = "solar-hero-bg.jpg" },
    @{ url = "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format"; name = "house-1.jpg" },
    @{ url = "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format"; name = "house-2.jpg" },
    @{ url = "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=800&auto=format"; name = "house-3.jpg" },
    @{ url = "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format"; name = "house-4.jpg" },
    @{ url = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop"; name = "solar-cta-bg.jpg" },
    @{ url = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop"; name = "solar-project-2.jpg" },
    @{ url = "https://images.unsplash.com/photo-1559302995-f09f21503348?q=80&w=1200&auto=format&fit=crop"; name = "solar-project-3.jpg" },
    @{ url = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop"; name = "testimonial-1.jpg" },
    @{ url = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop"; name = "testimonial-2.jpg" },
    @{ url = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop"; name = "testimonial-3.jpg" },
    @{ url = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"; name = "support-person.jpg" },
    @{ url = "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop"; name = "battery-section-2.jpg" },
    @{ url = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop"; name = "ev-section.jpg" },
    @{ url = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"; name = "wind-solar.jpg" },
    @{ url = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop"; name = "battery-smarter.jpg" },
    @{ url = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"; name = "director.jpg" },
    @{ url = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"; name = "contact-service.jpg" },
    @{ url = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"; name = "contact-banner-person.jpg" },

    # Battery slider product images
    @{ url = "https://cloverenergysystems.com/wp-content/uploads/2024/12/sigstor-battery-inverter.png"; name = "sigstor-battery.png" },
    @{ url = "https://www.alphaess.com/Public/Uploads/uploadfile/images/20220507/weibiaoti-2.png"; name = "alphaess-battery.png" },
    @{ url = "https://voltxenergy.com.au/cdn/shop/files/neovolt_pdp_Single-Phase_Solar_Battery_System.png?v=1777507162"; name = "neovolt-battery.png" },
    @{ url = "https://en.goodwe.com/images/blog/198/lynx-home-battery.png"; name = "goodwe-lynx-battery.png" },

    # Services section images
    @{ url = "https://www.energytoolbase.com/wp-content/uploads/2024/04/rhPqEofJT4e2aip7uBf3.webp"; name = "energy-storage.webp" },
    @{ url = "https://www.sigenergy.com/uploads/en_content/1741156288490534.webp"; name = "sigenergy-smarter.webp" },

    # About section images
    @{ url = "https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg"; name = "installing-solar.jpg" },
    @{ url = "https://5.imimg.com/data5/SELLER/Default/2025/3/498378875/UQ/HE/BB/35789085/solar-penal-570-adani.jpeg"; name = "adani-solar-panel.jpg" },
    @{ url = "https://png.pngtree.com/thumb_back/fw800/background/20230113/pngtree-blue-solar-panels-on-roof-with-street-view-photo-image_49208374.jpg"; name = "solar-roof-street.jpg" },
    @{ url = "https://patidarsolar.com/wp-content/uploads/2024/01/aerial-view-private-house-with-solar-panels-roof-1024x682.jpg"; name = "aerial-solar-house.jpg" },

    # SolarLeadSection images
    @{ url = "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/new-solar-sytem.webp"; name = "new-solar-system.webp" },
    @{ url = "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/expanding-existing-solar.webp"; name = "expanding-solar.webp" },
    @{ url = "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/new-solar-battery-sytem.webp"; name = "new-solar-battery.webp" },
    @{ url = "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/All-Battery-New.png"; name = "all-battery.png" },

    # WellnessExpertsSection images
    @{ url = "https://5.imimg.com/data5/SELLER/Default/2024/5/415483937/QC/XX/ER/74280208/solar-energy-monitoring-system-500x500.jpg"; name = "solar-monitoring.jpg" },
    @{ url = "https://sspindia.in/wp-content/uploads/2026/01/Ground-Mounted-Systems.jpg"; name = "ground-mounted-solar.jpg" },
    @{ url = "https://emtsolar.com/wp-content/uploads/2022/09/AdobeStock_392737024-1024x683.jpg"; name = "solar-installation.jpg" },

    # EV Charger image
    @{ url = "https://img.magnific.com/free-photo/ev-charging-station-clean-energy-filling-technology-electric-car-charging_35913-2573.jpg?semt=ais_hybrid&w=740&q=80"; name = "ev-charging-station.jpg" },

    # SolarLogoStrip / EVLogoStrip / CommercialLogoStrip / BatteryLogoStrip (same logos in all)
    @{ url = "https://arisesolar.com.au/wp-content/themes/arise-solar/assets/images/sec-logo.svg"; name = "sec-logo.svg" },
    @{ url = "https://5.imimg.com/data5/SELLER/Default/2024/9/453258022/VH/UP/RG/91379867/sungrow-sungrow-solar-inverter-battery.png"; name = "sungrow-logo.png" },

    # WhatsApp avatar
    @{ url = "https://i.pravatar.cc/150?img=12"; name = "support-avatar.jpg" },

    # ProjectsCTA bg
    @{ url = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"; name = "projects-cta-bg.jpg" }
)

$userAgents = @(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0"
)

$successCount = 0
$failCount = 0

foreach ($img in $images) {
    $destPath = Join-Path $outputDir $img.name
    if (Test-Path $destPath) {
        Write-Host "SKIP (exists): $($img.name)" -ForegroundColor Cyan
        $successCount++
        continue
    }
    
    $downloaded = $false
    foreach ($ua in $userAgents) {
        try {
            $headers = @{
                "User-Agent" = $ua
                "Accept" = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                "Accept-Language" = "en-US,en;q=0.9"
                "Referer" = "https://google.com/"
            }
            Invoke-WebRequest -Uri $img.url -OutFile $destPath -Headers $headers -TimeoutSec 30 -ErrorAction Stop
            $fileSize = (Get-Item $destPath).Length
            if ($fileSize -gt 1000) {
                Write-Host "OK ($($fileSize/1KB -as [int]) KB): $($img.name)" -ForegroundColor Green
                $successCount++
                $downloaded = $true
                break
            } else {
                Remove-Item $destPath -Force
                Write-Host "TOO SMALL, retry: $($img.name)" -ForegroundColor Yellow
            }
        } catch {
            Write-Host "ERROR with UA: $($_.Exception.Message.Substring(0, [Math]::Min(80,$_.Exception.Message.Length)))" -ForegroundColor Yellow
        }
    }
    if (!$downloaded) {
        Write-Host "FAILED: $($img.name) - $($img.url)" -ForegroundColor Red
        $failCount++
    }
    Start-Sleep -Milliseconds 300
}

Write-Host "`n=== DONE: $successCount succeeded, $failCount failed ===" -ForegroundColor Magenta
