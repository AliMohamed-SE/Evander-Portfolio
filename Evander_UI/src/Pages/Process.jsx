import { useState } from 'react';
import '../assets/Styles/Process.css'

// Components
import DesignProcessComponent from '../Components/DesignProcessComponent.jsx';
import DevelopmentProcessComponent from '../Components/DevelopmentProcessComponent.jsx';
function Process() {
    const [activeTab, setActiveTab] = useState('design');


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <section className="process-section">
            {/* Tab navigation */}
            < ul className="process-nav nav nav-tabs bar_tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'design' ? 'active' : ''}`}
                        id="design-tab"
                        data-toggle="tab"
                        href="#design"
                        role="tab"
                        aria-controls="design"
                        aria-selected={activeTab === 'design'}
                        onClick={() => handleTabClick('design')}
                    >
                        Design Process
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'dev' ? 'active' : ''}`}
                        id="dev-tab"
                        data-toggle="tab"
                        href="#dev"
                        role="tab"
                        aria-controls="dev"
                        aria-selected={activeTab === 'dev'}
                        onClick={() => handleTabClick('dev')}
                    >
                        Development Process
                    </a>
                </li>
            </ul>

            {activeTab === 'design' && (
                <DesignProcessComponent />
            )}

            {activeTab === 'dev' && (
                <DevelopmentProcessComponent />
            )}
        </section>
    );
}

export default Process;