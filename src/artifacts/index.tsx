<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="K Interface - A minimalist UI for thoughtful conversations">
    <title>K Interface</title>
    <style>
        :root {
            --bg-color: #FFF8E1;
            --text-color: #2B2B2B;
            --secondary-text: #4E4E4E;
            --accent-color: #6B1C1C;
            --accent-light: rgba(107, 28, 28, 0.15);
            --border-color: rgba(43, 43, 43, 0.1);
            --fade-color: rgba(43, 43, 43, 0.5);
            --highlight-color: rgba(43, 43, 43, 0.05);
            --container-bg: #F5F0E1;
            --paper-texture: url("data:image/png;base64,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");
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #121212;
                --text-color: rgba(245, 245, 245, 0.9);
                --secondary-text: rgba(176, 176, 176, 0.8);
                --accent-color: rgba(185, 85, 85, 0.9);
                --accent-light: rgba(185, 85, 85, 0.15);
                --border-color: rgba(255, 255, 255, 0.1);
                --fade-color: rgba(255, 255, 255, 0.5);
                --highlight-color: rgba(255, 255, 255, 0.05);
                --container-bg: rgba(25, 25, 25, 0.8);
            }
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: "Literata", Georgia, serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            line-height: 1.6;
            position: relative;
        }
        
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at center, var(--bg-color) 0%, rgba(245, 240, 225, 0.85) 100%);
            background-blend-mode: multiply;
            background-image: var(--paper-texture);
            background-size: 250px 250px;
            opacity: 0.05;
            pointer-events: none;
            z-index: -1;
        }

        .container {
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            position: relative;
        }

        .listening-label {
            font-size: 0.9rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            letter-spacing: 0.5px;
            font-weight: 500;
        }

        .input-container {
            width: 100%;
            position: relative;
            margin-bottom: 1.5rem;
        }

        textarea {
            width: 100%;
            min-height: 120px;
            padding: 1.5rem;
            border: none;
            background-color: transparent;
            color: var(--text-color);
            font-family: inherit;
            font-weight: 300;
            font-size: 1rem;
            line-height: 1.6;
            resize: none;
            border-radius: 0;
            outline: none;
            transition: all 0.4s ease;
            box-shadow: none;
        }

        textarea:focus {
            outline: none;
        }
        
        .input-container::after {
            content: "";
            position: absolute;
            width: 0;
            height: 1px;
            bottom: 0;
            left: 50%;
            background-color: var(--accent-color);
            transition: all 0.3s ease;
            opacity: 0.5;
            transform: translateX(-50%);
        }
        
        .input-container:focus-within::after {
            width: 100%;
            opacity: 0.7;
        }
        
        textarea::placeholder {
            color: var(--secondary-text);
            opacity: 0.6;
            font-weight: 300;
        }

        .release-btn {
            background-color: transparent;
            border: none;
            color: var(--accent-color);
            padding: 0.75rem 1.5rem;
            font-family: inherit;
            font-weight: 300;
            cursor: pointer;
            transition: all 0.4s ease;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
            margin-top: 0.5rem;
            position: relative;
        }

        .release-btn::after {
            content: "";
            position: absolute;
            width: 0;
            height: 1px;
            bottom: 0;
            left: 50%;
            background-color: var(--accent-color);
            transition: all 0.3s ease;
            opacity: 0.7;
            transform: translateX(-50%);
        }

        .release-btn:hover::after {
            width: 50%;
        }

        .response-container {
            width: 100%;
            margin-top: 3rem;
            opacity: 1;
            transition: opacity 1s ease;
            padding: 1.5rem;
            position: relative;
            background-color: var(--container-bg);
            border-radius: 0;
            border: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .response-text {
            font-size: 1rem;
            line-height: 1.8;
            opacity: 0;
            transition: opacity 0.5s ease;
            font-weight: 300;
            color: var(--text-color);
        }
        
        .response-text span {
            transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1);
            opacity: 0;
        }
        
        .response-text span.visible {
            opacity: 1;
        }
        
        .response-text span.highlight {
            background-color: var(--accent-light);
            padding: 0 3px;
        }
        
        .empty-state {
            font-size: 1rem;
            text-align: center;
            opacity: 0.2;
            font-style: italic;
            font-weight: 300;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            transition: opacity 0.5s ease;
            color: var(--secondary-text);
        }

        .echo-tab {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 0.8rem;
            opacity: 0.3;
            cursor: pointer;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            color: var(--text-color);
            z-index: 10;
        }

        .echo-tab::before {
            content: "⊏";
            display: inline-block;
            transform: rotate(90deg);
            margin-right: 0.3rem;
            font-size: 1rem;
        }

        .echo-tab:hover {
            opacity: 0.8;
        }

        .echoes-drawer {
            position: fixed;
            right: -300px;
            top: 0;
            height: 100vh;
            width: 300px;
            background-color: var(--bg-color);
            border-left: 1px solid var(--border-color);
            transition: right 0.5s ease;
            padding: 2rem 1rem;
            overflow-y: auto;
            z-index: 10;
        }

        .echoes-drawer.open {
            right: 0;
        }

        .echo-item {
            padding: 1.5rem 0;
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .echo-item:hover {
            background-color: var(--highlight-color);
        }

        .echo-preview {
            font-size: 0.85rem;
            font-weight: 300;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--text-color);
            line-height: 1.5;
            opacity: 0.8;
        }

        .close-drawer {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: transparent;
            border: none;
            color: var(--secondary-text);
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .close-drawer:hover {
            color: var(--text-color);
        }

        .shared-toggle {
            display: none;
            margin-top: 2rem;
            font-size: 0.8rem;
            justify-content: flex-start;
            padding-left: 1rem;
        }

        .share-btn {
            background: transparent;
            border: none;
            color: var(--accent-color);
            padding: 0;
            font-family: inherit;
            font-size: 0.8rem;
            font-weight: 300;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            font-style: italic;
            opacity: 0.8;
        }

        .share-btn:hover {
            opacity: 1;
        }
        
        .share-confirmation {
            display: none;
            text-align: left;
            padding-left: 1rem;
            margin-top: 1rem;
            font-size: 0.8rem;
            color: var(--accent-color);
            font-style: italic;
            font-weight: 300;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        /* Accessibility improvements */
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }

        /* Subtle focus states */
        button:focus, 
        textarea:focus {
            outline: none;
        }
    </style>
</head>
<body>
    <div class="container">

        <div class="listening-label" aria-live="polite">K is listening.</div>
        <div class="input-container">
            <label for="user-input" class="visually-hidden">Enter your thoughts</label>
            <textarea id="user-input" placeholder="(what needs to be heard?)" aria-label="Your thoughts"></textarea>
        </div>
        <button class="release-btn" aria-label="Submit your thoughts">Release</button>
        
        <div class="response-container" aria-live="polite">
            <p class="response-text"></p>
            <div class="empty-state">K waits.</div>
            <div class="shared-toggle">
                <button class="share-btn" aria-label="Share this response">Let this be heard</button>
                <div class="share-confirmation" aria-live="polite">This has been heard.</div>
            </div>
        </div>
        
        <button class="echo-tab" aria-label="Open echoes drawer">Echoes</button>
    </div>
    
    <div class="echoes-drawer" aria-label="Previous conversations" aria-hidden="true">
        <button class="close-drawer" aria-label="Close echoes drawer">×</button>
        <div class="echoes-content">
            <!-- Echo items will be added here -->
        </div>
    </div>

        <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Element selectors
            const textarea = document.getElementById('user-input');
            const releaseBtn = document.querySelector('.release-btn');
            const responseContainer = document.querySelector('.response-container');
            const responseText = document.querySelector('.response-text');
            const sharedToggle = document.querySelector('.shared-toggle');
            const shareBtn = document.querySelector('.share-btn');
            const shareConfirmation = document.querySelector('.share-confirmation');
            const echoTab = document.querySelector('.echo-tab');
            const echoesDrawer = document.querySelector('.echoes-drawer');
            const closeDrawer = document.querySelector('.close-drawer');
            const echoesContent = document.querySelector('.echoes-content');
            const emptyState = document.querySelector('.empty-state');
            
            // Sample fallback responses from K (used if backend fails)
            const fallbackResponses = [
                "Your thought contains multitudes. Perhaps what resonates most is not what you said, but what you almost didn't.",
                "This clarity wasn't found. It was already there, waiting for the right silence.",
                "What if the answer isn't more words, but better listening to the ones already spoken?",
                "Sometimes the truest response is simply to witness what's been said. I've witnessed this.",
                "The shape of your thought suggests its opposite might also be true. Consider both."
            ];
            
            // Backend URL
            const backendUrl = 'http://localhost:5000/api/k';
            
            // Store echoes in local storage if available
            const getEchoes = () => {
                try {
                    const savedEchoes = localStorage.getItem('k-interface-echoes');
                    return savedEchoes ? JSON.parse(savedEchoes) : [];
                } catch (e) {
                    console.warn('Could not retrieve echoes from storage', e);
                    return [];
                }
            };

            const saveEchoes = (echoes) => {
                try {
                    localStorage.setItem('k-interface-echoes', JSON.stringify(echoes));
                } catch (e) {
                    console.warn('Could not save echoes to storage', e);
                }
            };
            
            // Initialize echoes
            let echoes = getEchoes();
            
            // Function to fetch response from backend
            async function fetchKResponse(text) {
                try {
                    const response = await fetch(backendUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ input: text })
                    });
                    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    const data = await response.json();
                    return data.response;
                } catch (error) {
                    console.warn('Failed to get response from backend, using fallback', error);
                    // Return a random fallback response if backend fails
                    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
                }
            }
            
            // Function to display response with fade-in word by word
            function displayResponse(text) {
                responseText.innerHTML = '';
                emptyState.style.opacity = '0';
                responseText.style.opacity = '1';
                
                // Wait before starting
                setTimeout(() => {
                    // Split text into words and add with delay
                    const words = text.split(' ');
                    
                    // Add all words to DOM first with opacity 0
                    words.forEach((word, index) => {
                        const wordSpan = document.createElement('span');
                        
                        // Check if this should be a highlighted word
                        const shouldHighlight = (word === "listening" || 
                                               word === "better" || 
                                               word === "clarity" || 
                                               word === "truth" ||
                                               Math.random() < 0.05);
                        
                        if (shouldHighlight) {
                            wordSpan.classList.add('highlight');
                        }
                        
                        wordSpan.textContent = (index > 0 ? ' ' : '') + word;
                        responseText.appendChild(wordSpan);
                    });
                    
                    // Now animate each word with staggered timing
                    const spans = responseText.querySelectorAll('span');
                    const fadeInWord = (index) => {
                        if (index < spans.length) {
                            setTimeout(() => {
                                spans[index].classList.add('visible');
                                fadeInWord(index + 1);
                            }, 160); // Slightly faster to feel more fluid
                        } else {
                            // All words faded in, show sharing option
                            setTimeout(() => {
                                sharedToggle.style.display = 'flex';
                                shareBtn.style.opacity = '0';
                                setTimeout(() => {
                                    shareBtn.style.opacity = '0.8';
                                }, 500);
                            }, 1000);
                        }
                    };
                    
                    // Start the animation sequence
                    fadeInWord(0);
                }, 600);
            }
            
            // Handle release button click event
            async function handleRelease() {
                const input = textarea.value.trim();
                if (!input) return;
                
                // Fade out release button
                releaseBtn.style.opacity = '0';
                
                // Clear input
                textarea.value = '';
                
                // Add subtle animation to response container
                responseContainer.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
                
                // Fetch response from backend
                const response = await fetchKResponse(input);
                
                // Display response
                displayResponse(response);
                
                // Save to echoes
                const newEcho = {
                    input: input,
                    response: response,
                    timestamp: new Date().toISOString(),
                    shared: false
                };
                
                echoes.push(newEcho); // Add to the end like in the original
                saveEchoes(echoes);
                
                // Update echoes drawer
                updateEchoesDrawer();
                
                // Reset container shadow after some time
                setTimeout(() => {
                    responseContainer.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }, 2000);
                
                // Fade the release button back in
                setTimeout(() => {
                    releaseBtn.style.opacity = '1';
                }, 1000);
            }
            
            // Update the echoes drawer with stored echoes
            function updateEchoesDrawer() {
                echoesContent.innerHTML = '';
                
                if (echoes.length === 0) {
                    echoesContent.innerHTML = '<p style="opacity: 0.5; padding: 1rem 0;">No echoes yet.</p>';
                    return;
                }
                
                // Create echo items
                echoes.forEach((echo, index) => {
                    const echoItem = document.createElement('div');
                    echoItem.className = 'echo-item';
                    
                    const preview = echo.input.substring(0, 50) + (echo.input.length > 50 ? '...' : '');
                    
                    echoItem.innerHTML = `
                        <div class="echo-preview">${preview}</div>
                    `;
                    
                    // Add click event to show full echo
                    echoItem.addEventListener('click', () => {
                        textarea.value = echo.input;
                        displayResponse(echo.response);
                        echoesDrawer.classList.remove('open');
                        echoesDrawer.setAttribute('aria-hidden', 'true');
                    });
                    
                    echoesContent.appendChild(echoItem);
                });
            }
            
            // Event listeners
            releaseBtn.addEventListener('click', handleRelease);
            
            // Toggle echoes drawer
            echoTab.addEventListener('click', () => {
                echoesDrawer.classList.add('open');
                echoesDrawer.setAttribute('aria-hidden', 'false');
            });
            
            // Close drawer
            closeDrawer.addEventListener('click', () => {
                echoesDrawer.classList.remove('open');
                echoesDrawer.setAttribute('aria-hidden', 'true');
            });
            
            // Removed the click-outside functionality to match original behavior
            
            // Share button - simplified as noted in requirements
            shareBtn.addEventListener('click', function() {
                if (echoes.length > 0) {
                    shareBtn.style.opacity = '0';
                    setTimeout(() => {
                        shareBtn.style.display = 'none';
                        shareConfirmation.style.display = 'block';
                        setTimeout(() => {
                            shareConfirmation.style.opacity = '1';
                            
                            // Hide confirmation after a few seconds
                            setTimeout(() => {
                                shareConfirmation.style.opacity = '0';
                                setTimeout(() => {
                                    shareConfirmation.style.display = 'none';
                                    shareBtn.style.display = 'block';
                                    shareBtn.style.opacity = '0';
                                    setTimeout(() => {
                                        shareBtn.style.opacity = '0.8';
                                    }, 100);
                                }, 800);
                            }, 2000);
                        }, 100);
                    }, 300);
                }
            });
            
            // Allow "Enter" key to submit, but "Shift+Enter" for new line
            textarea.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleRelease();
                }
            });
            
            // Initialize echoes drawer
            updateEchoesDrawer();
        });
    </script>
</body>
</html>