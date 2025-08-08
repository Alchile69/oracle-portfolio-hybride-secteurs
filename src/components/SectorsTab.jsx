/**
 * Onglet Secteurs d'Activité - Oracle Portfolio Hybride
 * @author Manus AI
 * @version 2.6.1
 * @date 2025-08-08
 */

import React, { useState } from 'react';
import { useSectorData } from '../hooks/useSectorData';
import { AllocationChart } from './AllocationChart';
import { SectorTable } from './SectorTable';

const SectorsTab = () => {
  const { sectors, loading, error, refetch } = useSectorData();
  const [activeView, setActiveView] = useState('overview');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Chargement des secteurs...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-red-600 mr-2">⚠️</div>
          <div>
            <h3 className="text-red-800 font-medium">Erreur de chargement</h3>
            <p className="text-red-600 text-sm">{error}</p>
            <button 
              onClick={refetch}
              className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculs des statistiques globales
  const totalSectors = sectors.length;
  const avgPerformance = sectors.reduce((sum, s) => sum + s.metrics.performance, 0) / totalSectors;
  const totalAllocation = sectors.reduce((sum, s) => sum + s.metrics.allocation, 0);
  const avgRisk = sectors.reduce((sum, s) => sum + s.metrics.riskScore, 0) / totalSectors;

  const views = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'chart', label: 'Graphique', icon: '📈' },
    { id: 'table', label: 'Tableau', icon: '📋' }
  ];

  return (
    <div className="space-y-6">
      {/* Header avec statistiques */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Secteurs d'Activité</h2>
            <p className="text-gray-600">{totalSectors} secteurs analysés</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Dernière mise à jour</div>
            <div className="text-sm font-medium">
              {new Date().toLocaleDateString('fr-FR')}
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="text-blue-600 text-2xl mr-3">🏢</div>
              <div>
                <div className="text-2xl font-bold text-blue-900">{totalSectors}</div>
                <div className="text-blue-700 text-sm">Secteurs analysés</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="text-green-600 text-2xl mr-3">📈</div>
              <div>
                <div className="text-2xl font-bold text-green-900">
                  {avgPerformance > 0 ? '+' : ''}{avgPerformance.toFixed(1)}%
                </div>
                <div className="text-green-700 text-sm">Performance moyenne</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="text-purple-600 text-2xl mr-3">💼</div>
              <div>
                <div className="text-2xl font-bold text-purple-900">{totalAllocation.toFixed(1)}%</div>
                <div className="text-purple-700 text-sm">Allocation totale</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="text-orange-600 text-2xl mr-3">⚠️</div>
              <div>
                <div className="text-2xl font-bold text-orange-900">{avgRisk.toFixed(0)}/100</div>
                <div className="text-orange-700 text-sm">Risque moyen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation des vues */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === view.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{view.icon}</span>
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu selon la vue active */}
      <div className="bg-white rounded-lg shadow-sm border">
        {activeView === 'overview' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Aperçu des Secteurs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectors.slice(0, 6).map((sector) => (
                <div key={sector.metadata.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{sector.metadata.icon}</span>
                      <h4 className="font-medium">{sector.metadata.name}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      sector.grade === 'A' ? 'bg-green-100 text-green-800' :
                      sector.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                      sector.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Grade {sector.grade}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Allocation:</span>
                      <span className="font-medium">{sector.metrics.allocation}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Performance:</span>
                      <span className={`font-medium ${
                        sector.metrics.performance > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {sector.metrics.performance > 0 ? '+' : ''}{sector.metrics.performance}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tendance:</span>
                      <span className="font-medium">
                        {sector.metrics.trend === 'up' ? '↗️ Hausse' :
                         sector.metrics.trend === 'down' ? '↘️ Baisse' : '➡️ Stable'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'chart' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Allocation par Secteur</h3>
            <AllocationChart sectors={sectors} />
          </div>
        )}

        {activeView === 'table' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Analyse Détaillée</h3>
            <SectorTable sectors={sectors} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectorsTab;

